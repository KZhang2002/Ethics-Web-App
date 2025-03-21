import React from 'react';
import './App.css';
import {Home} from './Home'
import {Example} from './ExampleFile'
import Profile from './Profile';

// I'll implement a system for navigating between pages later, just put any links as blank using "#" for now.
// Figma has a plugin called FigmaToCode that allows you to select elements and get code for it
// https://www.figma.com/community/plugin/842128343887142055/figma-to-code-html-tailwind-flutter-swiftui
// Install the plugin and change to dev mode using the bottom middle tool bar. Then run the plugin.
// In the options for the plug in, select Tailwind, React (JSX) <- mandatory
// You can also choose optimize layout, round values, and round colors <- optional
// You don't have to pick the optional options but if you are unsure what to use i recommend it

// Also look into figma's auto layout and integrate that into your designs. It'll help the page in the long run.
// https://help.figma.com/hc/en-us/articles/5731482952599-Add-auto-layout-to-a-design

// Look at Example in ExampleFile.tsx for details on general structure for your code

function App() {
  return (
    <div>
      {/* when testing, just put your component here and comment out the other components*/}
      <Example/>
      <Profile/>
      {/*<Home/>*/}
    </div>
  );
}

export default App;

