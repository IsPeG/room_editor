import React from 'react'
import { Tooltip } from 'react-tooltip'

import '../../assets/styles/furSelectorItem.css'

import 'react-tooltip/dist/react-tooltip.css'

export default function FurSelectorItem(props) {

    const replaceImage = (e) => {
        e.currentTarget.src = '/src/assets/textures/ui/missingFurIcon.png'
    }

    return (
        <>
            <div
                className='furSelectorItem'
                data-tooltip-id={`tooltip-${props.furId}`}
                data-tooltip-content={props.furName.replace(/([A-Z])/g, ' $1').trim()}
                data-tooltip-place="top"
            >
                <img className='furSelectorItemImage' src={`/src/assets/textures/ui/${props.furName}.png`} alt="icon" onError={(e) => replaceImage(e)} />
            </div>
            <Tooltip id={`tooltip-${props.furId}`} />
        </>
    )
}