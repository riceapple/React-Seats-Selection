import React, { useEffect, useReducer, useState, useRef, useDebugValue } from 'react';
import styles from './style/index.less';

/**
 * 0 空走廊
 * 1 空座位
 * 2 已选座位
 * 3 损坏
 * 4 情侣座
 */
const site = [
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2], 
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2], 
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2], 
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2], 
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2], 
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2], 
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],  
]
// const site = [
//     [1,0,1,0,1,0,1,0,1,0,1],
//     [1,0,1,0,1,1,3,3,1,3,1],
//     [3,3,1,3,1,0,1,0,1,0,1]
// ]
const Stage = (props) => {
    let re = null,pageX = 0,pageY = 0,moveX = 0,moveY = 0;
    let currX = 0, currY =0;
    const siteLine = useRef(null)
    const screenRef = useRef(null)
    const stageRef = useRef(null)
    const innerStage = useRef(null)
    const content = useRef(null)
    const [zoom, setZoom] = useState(false)
    useEffect(()=>{
        debugger
        console.log('0')
        let rate = (document.body.clientWidth < innerStage.current.getClientRects()[0].width) ? (document.body.clientWidth / (innerStage.current.getClientRects()[0].width+50)) : 1
        screenRef.current.style.setProperty('--scale', `${rate}`);
        siteLine.current.style.setProperty('--scale', `${rate}`);
    }, [])
    let clickHandler = (e) => {
        let rate = 1.2
        screenRef.current.style.setProperty('--scale', `${rate}`);
        siteLine.current.style.setProperty('--scale', `${rate}`);
        setZoom(true)
    }
    let touchStartHandler = (e) => {
        pageX = e.touches[0].pageX
        pageY = e.touches[0].pageY
    }
    let touchMoveHandler = (e) => {
        moveX = e.touches[0].pageX - pageX
        moveY = e.touches[0].pageY - pageY
        pageX = e.touches[0].pageX
        pageY = e.touches[0].pageY
        currX += moveX;
        currY += moveY;
        screenRef.current.style.setProperty('--transformX', `${currX}px`);
        screenRef.current.style.setProperty('--transformY', `${currY}px`);
        siteLine.current.style.setProperty('--transformY', `${currY}px`);
        
    }
    let touchEndHandler = (e) => {
        let viewstage = screenRef.current
        let stage = stageRef.current
        let rect = viewstage.getClientRects()
        let stageRect = stage.getClientRects()
        let contentRect = content.current.getClientRects()
        let innerRect = innerStage.current.getClientRects()
        if (zoom){
            debugger
            let xLeftLimit = rect[0].width/2 - 100
            let xRightLimit = -(rect[0].width/2 - 100)
            if (currX <= xRightLimit) {
                currX = xRightLimit
            } else if (currX >= xLeftLimit) {
                currX = xLeftLimit
            }
            let yTopLimit = 0;
            if (currY >= yTopLimit) {
                currY = 0
            } else {
                if(innerRect[0].height > contentRect[0].height) {
                    currY = -(innerRect[0].height - contentRect[0].height) - 100
                } else {
                    currY = 0
                }
            }
        } else {
            currY = 0
            currX = 0
        }
        
        
        viewstage.style.setProperty('--transformX', `${currX}px`);
        viewstage.style.setProperty('--transformY', `${currY}px`);
        siteLine.current.style.setProperty('--transformY', `${currY}px`);
    }
    return (
            <div className={styles.stage} ref={stageRef}>
                <div className={styles.screen} alt="屏幕方向"></div>
            

                <div className={styles.content} ref={content}>
                    <ul className={styles.lineLeft} ref={siteLine}>
                        {
                            site.map((ele,idx,arr) => {
                                return (
                                    <li key={`${idx}d`}>{idx}</li>
                                )
                            })
                        }
                    </ul>
                    <div className={styles.viewStage} ref={screenRef} 
                        onTouchStart={touchStartHandler} 
                        onTouchMove={touchMoveHandler}
                        onTouchEnd={touchEndHandler}
                        onClick={(e)=>clickHandler(e)}
                    >
                        <div ref = {innerStage} 
                        className={styles.siteTable}>
                        {
                            site.map((ele,idx,arr) => {
                                return (
                                    <div  key={`${idx}a`}>
                                        {ele.map((e,i,ar) => {
                                            switch (e) {
                                                case 0:
                                                    re = null
                                                    break;
                                                case 1:
                                                    re = styles.empty
                                                    break;
                                                case 2:
                                                    re = styles.site
                                                    break;
                                                case 3:
                                                    re = styles.fixed
                                                    break;
                                                case 4:
                                                    re = styles.loveleft
                                                    if (ar[i-1] === 4) {
                                                        re = styles.loveright
                                                    }
                                                    break;
                                            }
                                            return (
                                            <div key={`${i}b`} className={re}>
                                            </div>)
                                        })}
                                    </div>
                                )
                            })
                        }
                        </div>

                        {/* <div className={bigState? styles.innerBigStage : styles.innerStage}
                            ref = {innerStage}
                            style = {{width: `${20*site[0].length}px`}}
                        >
                        {
                            site.map((ele,idx,arr) => {
                                return (
                                    <div  key={`${idx}a`}>
                                        {ele.map((e,i,ar) => {
                                            switch (e) {
                                                case 0:
                                                    re = null
                                                    break;
                                                case 1:
                                                    re = styles.empty
                                                    break;
                                                case 2:
                                                    re = styles.site
                                                    break;
                                                case 3:
                                                    re = styles.fixed
                                                    break;
                                                case 4:
                                                    re = styles.loveleft
                                                    if (ar[i-1] === 4) {
                                                        re = styles.loveright
                                                    }
                                                    break;
                                            }
                                            return (
                                            <div key={`${i}b`} className={re}>
                                            </div>)
                                        })}
                                    </div>
                                )
                            })
                        }
                        </div> */}
                    </div>
                </div>


            </div>
    )
}

export default Stage;