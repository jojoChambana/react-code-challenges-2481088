/*
  when the button with the className dark-mode-button is clicked, the page should be displayed in dark mode

  when the button with the className light-mode-button is clicked, the page should be displayed without dark mode
*/

export default function DarkMode() {
  return (
    <div className='page'>
      <button className='dark-mode-button'>Dark Mode</button>
      <button className='light-mode-button'>Light Mode</button>
    </div>
  )
}
