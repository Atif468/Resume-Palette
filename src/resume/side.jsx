import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LinkIcon from '@mui/icons-material/Link';
import SchoolIcon from '@mui/icons-material/School';
import SourceIcon from '@mui/icons-material/Source';
import CodeIcon from '@mui/icons-material/Code';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BadgeIcon from '@mui/icons-material/Badge';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 745, zIndex: 10, position: 'fixed', bottom: 0 }} value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Links"
          value="links"
          icon={<LinkIcon />}
          onclick={()=> console.log("hey")}
        />
        <BottomNavigationAction
          label="Profile"
          value="profile"
          icon={<AccountBoxIcon />}
        />
        <BottomNavigationAction
          label="Education"
          value="education"
          icon={<SchoolIcon />}
        />
        
      <BottomNavigationAction
        label="Projects"
        value="projects"
        icon={<SourceIcon />}
      />
      <BottomNavigationAction
        label="Skills"
        value="skills"
        icon={<CodeIcon />}
      />
      <BottomNavigationAction
        label="Awards"
        value="awards"
        icon={<EmojiEventsIcon />}
      />
      <BottomNavigationAction
        label="Certificate"
        value="certificate"
        icon={<BadgeIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}
