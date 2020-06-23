/**
 * Stage 座位舞台
 * props:
 *  site:  座位数据
 *  siteEvent: 将选中的座位给到父组件
 * methods:
 *  limitRage 获取最大可拖动范围
 *  sitFilter 座位数据过滤
 *  screenFollow 放大后屏幕跟随
 *  clickHandler 座位点击后放大
 *  touchStartHandler 拖动开始
 *  touchMoveHandler 拖动中
 *  touchEndHandler 拖动结束
 */
import React, { useEffect, useState, useRef, useReducer, createContext, useMemo } from 'react';
import styles from './style/index.less';
import Single from '../Site/Single'
import Multi from '../Site/Multi'
import Detail from '../Site/Detail'
import Preview from '../Preview'
import { reducer, defaultState } from '../context'
import Hammer from 'react-hammerjs'

export const Context = createContext(null) // 私有state

let pageX = 0, pageY = 0
const Stage = (props) => {
    let moveX = 0, moveY = 0, currX = 0, currY = 0, touchStatus = false, stageScale = 1;
    let time = null;
    const { site, siteEvent } = props,
        siteLine = useRef(null),    // 侧边座位排数
        screenRef = useRef(null),
        stageRef = useRef(null),    // 舞台引用
        innerStage = useRef(null),  // 座位引用
        content = useRef(null),     // 容器引用
        preview = useRef(null),
        thumbnail = useRef(null),
        [zoom, setZoom] = useState(false),
        [state, dispatch] = useReducer(reducer, defaultState), // stage 私有reducer
        [isTouch, setTouch] = useState(false),  // 是否触摸
        [isFollow, setFollow] = useState(true),  // 点击放大时的跟随
        [topThumbnail, setTop] = useState(0),
        [leftThumbnail, setLeft] = useState(0),
        [scale, setScale] = useState(1);
    // [stageScale, setStageScale] = useState(1);
    useEffect(() => { // 渲染后屏幕缩放
        let rate = (content.current.getClientRects()[0].width < innerStage.current.getClientRects()[0].width) ? (content.current.getClientRects()[0].width / (innerStage.current.getClientRects()[0].width + 50)) : 1
        screenRef.current.style.setProperty('--scale', `${rate}`);
        siteLine.current.style.setProperty('--scale', `${rate}`);
        // stageRef.current.addEventListener('touchmove', (e) => {
        //     // e.preventDefault()
        // }, {
        //     passive: false
        // })
        // screenRef.current.addEventListener('touchstart', touchStartHandler, {
        //     passive: false
        // })
        // screenRef.current.addEventListener('touchmove', touchMoveHandler, {
        //     passive: false
        // })
        // screenRef.current.addEventListener('touchend', touchEndHandler, {
        //     passive: false
        // })

    }, [])

    useEffect(() => {
        siteEvent(state.value)  // 获取选中的座位信息
        if (isFollow) {
            screenFollow()      // 第一次放大时的跟踪
        }
        setTouch(true)
        window.clearTimeout(time)         // preview 显示
        time = setTimeout(() => {
            setTouch(false)     // 4秒后preview 隐藏
        }, 4000)
    }, [state, siteEvent])

    let sitFilter = useMemo(() => { // data数据过滤 过滤 情人座位。连续4，4 =》 4
        let state = false
        let result = []
        site.map((element, idx, arr) => {
            let row = []
            element.map((ele, i, ar) => {
                if (state && ele.state === 4) {
                    state = false
                } else {
                    state = true
                    row.push(ele)
                }
            })
            result.push(row)
        })
        return result
    }, [site])


    let limitRage = () => {    // 获取容器拖动的最大区域
        let contentRect = content.current.getClientRects()
        let innerRect = innerStage.current.getClientRects()
        let limit = 80
        return {
            width: innerRect[0].width + limit * 2,
            height: innerRect[0].height + limit * 2,
            maxY: 0,
            minY: ((innerRect[0].height + limit) >= contentRect[0].height) ?
                contentRect[0].height - (innerRect[0].height + limit) : 0,
            maxX: ((innerRect[0].width + limit * 2) >= contentRect[0].width) ?
                (innerRect[0].width + limit * 2) / 2 - contentRect[0].width / 2 : 0,
            minX: ((innerRect[0].width + limit * 2) >= contentRect[0].width) ?
                contentRect[0].width / 2 - (innerRect[0].width + limit * 2) / 2 : 0,
        }
    }
    let screenFollow = () => {  // 获取当前选中的座位并在舞台上现实
        if (state.currentDom && state.currentDom.dom && state.currentDom.dom.getClientRects()[0]) {
            let currentRect = state.currentDom.dom.getClientRects()[0]
            currX = -(currentRect.left - content.current.getClientRects()[0].width / 2)
            screenRef.current.style.setProperty('--transformX', `${currX}px`);
            currY = -(currentRect.top - content.current.getClientRects()[0].top) + 30
            screenRef.current.style.setProperty('--transformY', `${currY}px`);
            touchEndHandler()   // 防止在舞台上坐标 超过最大的可移动范围
            setFollow(false)
        }
    }
    let clickHandler = (e) => { // 点击后座位放大
        if (zoom) return
        let rate = 1.8;
        stageScale = 1.8;
        screenRef.current.style.setProperty('--scale', `${rate}`);
        siteLine.current.style.setProperty('--scale', `${rate}`);
        thumbnail.current.style.setProperty('transform', `scale(${1 / stageScale}`);

        setZoom(true)
    }
    let pinchout = () => {
        // let rate = 1.8
        // alert(123)
        if (stageScale >= 0 && stageScale < 1.8) {

            stageScale += 0.1;
            screenRef.current.style.setProperty('--scale', `${stageScale}`);
            siteLine.current.style.setProperty('--scale', `${stageScale}`);
            setZoom(true)
        }
    }
    let pinchin = () => {

        // if (zoom) return
        // let rate = 1.8
        if (stageScale > 1) {
            // alert(123)

            stageScale = stageScale - 0.1;
            screenRef.current.style.setProperty('--scale', `${stageScale}`);
            siteLine.current.style.setProperty('--scale', `${stageScale}`);
        }

        // setZoom(true)
    }
    let touchStartHandler = (e) => { // 拖动开始
        pageX = e.changedPointers[0].pageX
        pageY = e.changedPointers[0].pageY
        currX = parseInt(screenRef.current.style.getPropertyValue('--transformX')) || 0;
        currY = parseInt(screenRef.current.style.getPropertyValue('--transformY')) || 0;
        touchStatus = true
    }
    let touchMoveHandler = (e) => { // 拖动移动
        e.preventDefault()
        if (touchStatus) {
            let screenRefCurrent = screenRef.current;
            currX = parseFloat(screenRef.current.style.getPropertyValue('--transformX')) || 0;
            currY = parseFloat(screenRef.current.style.getPropertyValue('--transformY')) || 0;
            stageScale = parseFloat(screenRef.current.style.getPropertyValue('--scale')) || 0;

            moveX = e.changedPointers[0].pageX - pageX
            moveY = e.changedPointers[0].pageY - pageY
            pageX = e.changedPointers[0].pageX
            pageY = e.changedPointers[0].pageY
            currX += moveX;
            currY += moveY;
            screenRef.current.style.setProperty('--transformX', `${currX}px`);
            screenRef.current.style.setProperty('--transformY', `${currY}px`);
            siteLine.current.style.setProperty('--transformY', `${currY}px`);

            console.log('topandleft', currX, currY);
            // 计算主舞台和缩略图的宽高比例 原始数据取值单位为px
            let stageWidth = screenRefCurrent.offsetWidth,
                stageHeight = screenRefCurrent.offsetHeight;
            let previewStage = document.getElementById('previewStage'),
                preivewHeight = parseFloat(previewStage.offsetHeight) * .5, // .5为缩略图缩放比例 计算出实际高度px
                previewWidth = parseFloat(previewStage.offsetWidth) * .5, // .5为缩略图缩放比例 计算出实际高度px
                stagePreviewWidthRate = stageWidth / previewWidth,
                stagePreviewHeightRate = stageHeight / preivewHeight;

            thumbnail.current.style.setProperty('top', `${-currY / stagePreviewWidthRate}px`);
            thumbnail.current.style.setProperty('left', `${-currX / stagePreviewHeightRate}px`);
            thumbnail.current.style.setProperty('transform', `scale(${1 / stageScale}`);

            // let heightProportion =
            //     (seatBoxHeight * _this.seatScale) / _this.thumbnailHeighthRem;
            // // .seatBox的宽和缩略图的宽 换算比例
            // let widthProportion = _this.seatAreaWidthRem / _this.thumbnailWidthRem;
            // //缩略图设置红色区域位移
        }


    }
    let touchEndHandler = (e) => { // touch 抬手
        //设置主屏幕移动位置
        let rage = limitRage()
        currX = parseInt(screenRef.current.style.getPropertyValue('--transformX')) || 0;
        currY = parseInt(screenRef.current.style.getPropertyValue('--transformY')) || 0;
        currX = currX >= rage.maxX ? rage.maxX : currX < rage.minX ? rage.minX : currX
        currY = currY >= rage.maxY ? rage.maxY : currY < rage.minY ? rage.minY : currY
        screenRef.current.style.setProperty('--transformX', `${currX}px`);
        screenRef.current.style.setProperty('--transformY', `${currY}px`);
        siteLine.current.style.setProperty('--transformY', `${currY}px`);

        //设置缩略图选中红色区域的位置 start
        let previewStage = document.getElementById('previewStage'),
            thumbnailBorder = thumbnail.current;
        let thumbnailHeighthPx = parseFloat(previewStage.offsetHeight),
            thumbnailWidthPx = parseFloat(previewStage.offsetWidth),
            thumbBoardHeighthPx = parseFloat(thumbnailBorder.offsetHeight),
            thumbBoardWidthPx = parseFloat(thumbnailBorder.offsetWidth),
            maxHeightOffset = thumbnailHeighthPx * .5 - thumbBoardHeighthPx * .5 * (1 / stageScale),
            maxWidthOffset = thumbnailWidthPx * .5 - thumbBoardWidthPx * .5 * (1 / stageScale);
        // console.log('max', maxWidthOffset, maxWidthOffset)
        let thumbnailCurrX = parseFloat(thumbnail.current.style.getPropertyValue('left').replace('px', '')),
            thumbnailCurrY = parseFloat(thumbnail.current.style.getPropertyValue('top').replace('px', ''));

        // 缩略图移动超过了边界值 把移动置为边界值
        if (thumbnailCurrX > maxWidthOffset) {
            thumbnailCurrX = maxWidthOffset;
        } else if (thumbnailCurrX < -maxWidthOffset) {
            thumbnailCurrX = -maxWidthOffset;
        }
        // 缩略图移动超过了边界值 把移动置为边界值
        if (thumbnailCurrY > maxHeightOffset) {
            thumbnailCurrY = maxHeightOffset;
        } else if (thumbnailCurrY < -maxHeightOffset) {
            thumbnailCurrY = -maxHeightOffset;
        }
        console.log('maxthumbail', thumbnailCurrY, thumbnailCurrX)

        thumbnail.current.style.setProperty('top', `${thumbnailCurrY}px`);
        thumbnail.current.style.setProperty('left', `${thumbnailCurrX}px`);
        //设置缩略图选中红色区域的位置 end

    }


    return (
        <div className={styles.stage} ref={stageRef}>
            <Detail />
            <div className={styles.stageBox}>
                <div className={styles.preview}>

                    {/* <!--红色外框开始--> */}
                    <div
                        id={'thumbnailBorder'}
                        ref={thumbnail}
                        className={styles.thumbnailBorder}
                    ></div>
                    {/* // <!--红色外框结束-- >  */}
                    <Preview data={sitFilter} choose={state} show={false} ref={preview} />
                </div>
                <div className={styles.screen} alt="屏幕方向"></div>
                <div className={styles.content} ref={content}>
                    <ul className={styles.lineLeft} ref={siteLine}>
                        {
                            sitFilter.map((ele, idx, arr) => {
                                return (
                                    <li key={`${idx}d`}>{idx}</li>
                                )
                            })
                        }
                    </ul>

                    <div className={styles.viewStage} ref={screenRef}
                    // onTouchStart={touchStartHandler}
                    // onTouchMove={touchMoveHandler}
                    // onTouchEnd={touchEndHandler}
                    >

                        <Context.Provider value={{ state, dispatch: dispatch }}>

                            <div ref={innerStage}
                                className={styles.siteTable}>
                                <Hammer
                                    onPinchOut={pinchout}
                                    onPinchIn={pinchin}
                                    onPan={touchMoveHandler}
                                    onPanStart={touchStartHandler}
                                    // onDoubletap="panstart"
                                    onPanEnd={touchEndHandler}
                                    options={{
                                        recognizers: {
                                            pinch: { enable: true }
                                        }
                                    }}
                                // style={{ position: 'absolute', zIndex: 99 }}
                                >
                                    <ul onClick={(e) => clickHandler(e)}
                                    >
                                        {
                                            sitFilter.map((ele, idx, arr) => {
                                                return (
                                                    <div key={`${idx}a`}>
                                                        {ele.map((e, i, ar) => {
                                                            if (e.state === 4 || e.state === 7) {
                                                                return (<Multi key={`${i}b`} data={e} />)
                                                            } else {
                                                                return (<Single key={`${i}b`} data={e} />)
                                                            }

                                                        })}
                                                    </div>
                                                )
                                            })
                                        }
                                    </ul>


                                </Hammer>

                            </div>

                        </Context.Provider>

                    </div>
                </div>
            </div>
        </div >
    )
}
export default Stage