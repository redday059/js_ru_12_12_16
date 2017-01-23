import { OrderedMap } from 'immutable'

export function arrayToMap(arr, Model) {
     // function arrayToMap(arr) {
     // return arr.reduce((acc, entity) => ({...acc, [entity.id]: entity}), {})
     return arr.reduce((acc, entity) => {
         const model = Model ? new Model(entity) : entity
         return acc.set(entity.id, model)
     }, new OrderedMap({}))
}

 export function mapToArray(immutableMap) {
     //return Object.keys(obj).map(key => obj[key])
     return immutableMap.valueSeq().toArray();
 }


export function generateRandomId() {
    return Date.now() + Math.random()
}