import React from "react"
import GridItem from "./gridItem"
import { usePrevious } from "../shared/hooks"

const Grid = ({ data }) => {
  const [previousLength] = usePrevious(data.length)
  const [previousItems, setPreviousItems] = usePrevious()

  const newData = data.slice(previousLength ?? 0)
  const items = cleanData(splitData(newData, 0))

  const itemGroups = [...(previousItems ?? []), ...items]
  setPreviousItems(itemGroups)

  return (
    <>
      {itemGroups.map((itemGroup, groupIndex) => {
        return (
          <div key={groupIndex} className="tile is-ancestor">
            {itemGroup.map((item, itemIndex) => {
              const sizeClass = getSizeClass(
                itemIndex,
                groupIndex,
                itemGroup.length
              )
              return (
                <div key={itemIndex} className={"tile is-parent " + sizeClass}>
                  <article className="tile is-child box">
                    <GridItem item={item}></GridItem>
                  </article>
                </div>
              )
            })}
          </div>
        )
      })}
    </>
  )
}

export default React.memo(
  Grid,
  (prevProps, nextProps) => prevProps.data === nextProps.data
)

const splitData = (data, start) => {
  if (start >= data.length) {
    return
  }
  const minLength = Math.min(2, Math.abs(data.length - start))
  const maxLength = Math.min(3, Math.abs(data.length - start))
  const groupSize = ~~(Math.random() * 2) ? minLength : maxLength
  const group = data.slice(start, start + groupSize)
  const newStart = start + group.length
  return [group].concat(splitData(data, newStart))
}

const cleanData = input =>
  input.reduce((prev, curr) => {
    if (curr !== undefined) return prev.concat([curr])
    return prev
  }, [])

const getSizeClass = (rowIndex, itemIndex, rowSize) =>
  (rowSize === 2 && rowIndex % 2 === 0 && itemIndex % 2 === 0) ||
  (rowSize === 2 && rowIndex % 2 !== 0 && itemIndex % 2 !== 0)
    ? "is-8"
    : ""
