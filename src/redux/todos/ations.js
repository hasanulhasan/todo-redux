import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, LOADED, TOGGLED } from "./ationTypes"

export const loaded = (todos) => {
  return {
    type: LOADED,
    payload: todos
  }
}
export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText
  }
}
export const toggled = (doId) => {
  return {
    type: TOGGLED,
    payload: doId
  }
}
export const colorselected = (doId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      doId,
      color
    }
  }
}
export const deleted = (doId) => {
  return {
    type: DELETED,
    payload: doId
  }
}
export const allcompleted = () => {
  console.log('clicked')
  return {
    type: ALLCOMPLETED
  }
}
export const clearcompleted = (doId) => {
  return {
    type: CLEARCOMPLETED
  }
}