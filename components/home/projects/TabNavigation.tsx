import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from "./tabnav.module.scss";
import { OutlineButton } from '@/components/buttons/OutlineButton';
import { StandardButton } from '@/components/buttons/StandardButton';

interface Props {
    onSelectTab: (tabValue: string) => void;
}

export const TabNavigation = ({
     onSelectTab 
}:Props) => {
  const [activeTab, setActiveTab] = useState('Web Dev');
  console.log(activeTab);
  
  const handleTabClick = (tabValue: string) => {
    setActiveTab(tabValue);
    onSelectTab(tabValue);
  };
  const handleTab2Click = () => {
    setActiveTab('Data Science');
    onSelectTab('Data Science');
  };

  return (
    <div className={styles.mainTab}>
      <StandardButton onClick={() => handleTabClick('Web Dev')} children={'Web Dev'} isActive={activeTab === 'Web Dev'} />
      <StandardButton onClick={() => handleTab2Click()} children={'Data Science'} isActive={activeTab === 'Data Science'} />
    </div>
  );
};