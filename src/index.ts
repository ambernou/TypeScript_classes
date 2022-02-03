import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { SearchFormData } from './searchFormData.js'

const checkInDate = new Date()
checkInDate.setDate(checkInDate.getDate() + 1)

const checkOutDate = new Date()
checkOutDate.setDate(checkInDate.getDate() + 2)

class userClass {
  userName: string
  avatarSrc: string
  constructor (userName: string, avatarSrc: string) {
    this.userName = userName,
    this.avatarSrc = avatarSrc
  }
}

const user = new userClass('WadeWarren', 'img/avatar.png')

localStorage.setItem('user', JSON.stringify(user))
localStorage.setItem('favoritesAmount', '2')

function getUserData (key: string) {
  const getData: string | null = localStorage.getItem(key)
  let userInfo: unknown
  if (getData != null) {
    userInfo = JSON.parse(getData)
  }
  
  Object.setPrototypeOf(userInfo, userClass.prototype)

  if (userInfo instanceof userClass) { 
    return userInfo
  } else {
    throw new Error('User in local storage is wrong')
  }
}

function getFavoritesAmount (key: string) {
  const getData: string | null = localStorage.getItem(key)
  let userInfo: unknown
  if (getData != null) {
    userInfo = JSON.parse(getData)
  }

  if (typeof userInfo === 'number') {
    return userInfo
  } else {
    throw new Error('User in local storage is wrong')
  }
}

const userName = getUserData('user').userName
const avatarSrc = getUserData('user').avatarSrc
const favoriteItemsAmount = getFavoritesAmount('favoritesAmount')

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(userName, avatarSrc, favoriteItemsAmount)
  renderSearchFormBlock(checkInDate, checkOutDate)
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )

  const btn = document.getElementById('search-btn') as HTMLElement
  btn.addEventListener('click', clickHandler)

  function clickHandler (e: Event) {
    e.preventDefault()
    const data: SearchFormData = {
      city: (document.getElementById('city') as HTMLInputElement).value,
      checkInDate: (document.getElementById('check-in-date') as HTMLInputElement).value,
      checkOutDate: (document.getElementById('check-out-date') as HTMLInputElement).value,
      maxPrice: (document.getElementById('max-price') as HTMLInputElement).value
    }

    search(data)
  }
  
  function search (data: SearchFormData) {
    console.log(data)
  }
})

