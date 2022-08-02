import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import styled from "styled-components";

export const WrapperTabs = styled(Tabs) `
    font-size: 12px;
    width: 100%;
    margin-top: 16px;
`;

export const WrapperTabList = styled(TabList) `
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
    margin-left: 32px;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab) `
    border: 1px solid #ccc;
    border-bottom: 0;
    padding: 8px;
    user-select: none;
    cursor: pointer;
    z-index: 99999;
    margin: 3px;
    margin-bottom: -12px;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    background-color: #ccc;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;

    &:focus {
        outline: none;
        
    }

    &.is-selected {
        border-bottom: 1px solid white;
        background-color: white;
        color: dodgerblue;
    }

`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel) `
    padding: 16px;
    border: 1px dotted #ccc;
    margin: 8px;
    display: none;
    
    &.is-selected {
        display: block;
    }
`;
WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div  `
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;