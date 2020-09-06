import React from 'react'
import { Gutter, MaxWidth, Spacer } from '@mdkroon/react-ui-components'
import style from './app.module.css'

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const App = () => {
  return (
    <div className={style.root}>
      <MaxWidth size={1200}>
        <Gutter size={30}>
          <div className={style.whiteBg}>
            <Spacer height={50}/>
            <h1>React Ui Components - Example</h1>
            <p>There are background colors added to show the layout that is made with this package.</p>
            <Spacer height={24}/>
            <p>{loremIpsum}</p>
            <MaxWidth size={400}>
              <div className={style.whiteBg}>
                <Spacer height={12}/>
                <p><span className={style.blue}>MaxWidth</span> component is shown with blue borders.</p>
                <p><span className={style.green}>Gutter</span> component margins are green.</p>
                <p><span className={style.grey}>Spacer</span> components are shown with a grey background.</p>
                <Spacer height={12}/>
              </div>
            </MaxWidth>
            <p>{loremIpsum}</p>
            <Spacer height={50}/>
          </div>
        </Gutter>
      </MaxWidth>
    </div>
  )
}

export default App
