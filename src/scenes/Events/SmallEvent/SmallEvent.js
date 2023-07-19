import React from 'react';
import Event from '../Event'
import tkColors, {linearGradient} from 'Settings/tkColors'
import { EVENT_TYPE } from 'Settings/Const';
import ScheduleEvent from 'scenes/Schedule/ScheduleEvent'


const banner=require('images/banner/festivalito_banner.jpg');
const photographer='Tangokompaniet'
const eventType=EVENT_TYPE.WEEKEND
const defaultDateRange='01Jan00-31Dec99'
const style = {
    color:'black', 
    background: linearGradient('blue', 'black'),
    height:50,
}

const formFields = [
        {
                type:'radio',
                label:'Dance role',
                name:'role',
                values:['LEADER', 'FOLLOWER', 'BOTH'],
                required:true
        },
        {
                type:'text',
                label:'First name',
                name:'firstName',
                required:true,
                style:{'textTransform':'capitalize'},

        },
        {
                type:'text',
                label:'Last name',
                name:'lastName',
                required:true,
                style:{'textTransform':'capitalize'},

        },
        {
                type:'email',
                label:'email',
                name:'email',
                required:true
        },
        {
                type:'textarea',
                cols:30,
                rows:2,
                maxLength:160,
                label:'Address',
                name:'address',
                required:true
        },
        {
                type:'text',
                label:'phone',
                name:'phone',
                required:true
        },
        {
                type:'checkbox',
                label:'Have Dance Partner',
                name:'dancePartner',
        },
        {
                type:'text',
                label:'Partners first name',
                name:'firstNamePartner',
                required:true,
                notHiddenIf:'dancePartner',
                style:{'textTransform':'capitalize'}
        },
        {
                type:'text',
                label:'Partners last name',
                name:'lastNamePartner',
                required:true,
                notHiddenIf:'dancePartner',
                style:{'textTransform':'capitalize'}

        },
        {
                type:'email',
                label:'Partners email',
                name:'emailPartner',
                required:true,
                notHiddenIf:'dancePartner'
        },
]


export const menuList = (groupId, dateRange) => ([
        {
                label:'Start',
        },
        {
                label:'Schedule',
        },
        {
                label:'Teachers',
        },    
        {
                label:'Prices',
        },
        {
                label:'Register',
                registrationComponent:React.cloneElement(<ScheduleEvent />, {eventType, groupId, dateRange}),
        },
        {
                label:'Venues',
        },
        {
                label:'Contact Us',
        }
    ])    

// More components
const SmallEvent = (props) =>{
        const title=props.match?props.match.params?props.match.params.title?props.match.params.title:eventType:eventType:eventType
        const dateRange=props.match?props.match.params?props.match.params.dateRange?props.match.params.dateRange:defaultDateRange:defaultDateRange:defaultDateRange
        const groupId=eventType + '_' + dateRange
        return(
                <Event 
                dateRange={dateRange}
                groupId={groupId}
                eventType={eventType} 
                menuList = {menuList(groupId, dateRange)}
                banner={banner}
                photographer={photographer}
                style={style}
                />
        )
};

export default SmallEvent
