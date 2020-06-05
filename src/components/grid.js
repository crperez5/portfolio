import React from "react"
import GridItem from "./gridItem"

const Grid = ({ data }) => {
  const items = cleanData(splitData(data, 0))

  return (
    <>
      {items.map((itemGroup, groupIndex) => {
        const isEvenGroup = isEvenItemGroup(itemGroup, groupIndex)
        const groupHasDescriptions = groupHasDescriptions(itemGroup)

        return (
          <div class="tile is-ancestor">
            {itemGroup.map((item, itemIndex) => {
              const sizeClass = getSizeClass(
                itemIndex,
                groupIndex,
                itemGroup.length
              )
              return (
                <div class={"tile is-parent " + sizeClass}>
                  <article class="tile is-child box">
                    <GridItem
                      item={item}
                      forcePushUp={
                        isEvenGroup && groupHasDescriptions && !item.description
                      }
                    ></GridItem>
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

export default Grid

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

const isEvenItemGroup = (group, groupIndex) =>
  group.reduce(
    (prev, _, itemIndex) =>
      prev && !getSizeClass(groupIndex, itemIndex, group.length),
    true
  )

const groupHasDescriptions = group =>
  group.reduce((prev, curr) => prev || curr.description !== null, false)

const getSizeClass = (rowIndex, itemIndex, rowSize) =>
  (rowSize === 2 && rowIndex % 2 === 0 && itemIndex % 2 === 0) ||
  (rowSize === 2 && rowIndex % 2 !== 0 && itemIndex % 2 !== 0)
    ? "is-8"
    : ""
