import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./ationTypes"

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
export const allcompleted = (doId) => {
  return {
    type: ALLCOMPLETED
  }
}
export const clearcompleted = (doId) => {
  return {
    type: CLEARCOMPLETED
  }
}