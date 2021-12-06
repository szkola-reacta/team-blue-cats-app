import React from "react";
import PropTypes from 'prop-types';
import { Wrapper,BarDisplay, ProgressDisplay, LabelStyle } from './ProgressBar.styles'
export default function ProgressBar ({progress, maxAnswers, barColor}){

    return (
        <Wrapper>
            <BarDisplay>
                <ProgressDisplay maxAnswers={maxAnswers} progress={progress} colorBar={barColor}></ProgressDisplay>
            </BarDisplay>
            <LabelStyle>
               {progress}/{maxAnswers}
            </LabelStyle>
        </Wrapper>
    )
}

ProgressBar.propTypes = {
    progress: PropTypes.number,
    maxAnswers: PropTypes.number,
    barColor: PropTypes.string,
}

ProgressBar.defaultProps = {
    progress: 2,
    maxAnswers: 10,
    barColor: "yellow"
}