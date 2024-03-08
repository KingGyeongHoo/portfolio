import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Pallete from '../../../Pallete';
import { TooltipProps } from 'recharts';

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltipDiv = styled.div`
    width: 100%;
    padding: 15% 30%;
    background-color: #ffffff;
    border-radius: 30px;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.5);
`
const CustomTooltipP = styled.p`
    color: #000000;
`
const HighlightSpan = styled.span`
    color: ${Pallete.main_color};
    font-weight: bold;
`

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <CustomTooltipDiv>
          <CustomTooltipP>{label} : <HighlightSpan>{payload[0].value}</HighlightSpan></CustomTooltipP>
        </CustomTooltipDiv>
      );
    }
  
    return null;
  };


const Graph: React.FC<any> = ({info}) => {
    const data = info
    return(
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="index" />
            <PolarRadiusAxis />
            <Tooltip content={<CustomTooltip />}></Tooltip>
            <Radar name="skill" dataKey="rate" stroke={Pallete.main_color_dark} fill={Pallete.main_color} fillOpacity={0.6} />
            <Radar name="max" dataKey="max" stroke={Pallete.main_color_dark} fill={Pallete.main_color} fillOpacity={0} />
            </RadarChart>
        </ResponsiveContainer>
    )
}
export default Graph;