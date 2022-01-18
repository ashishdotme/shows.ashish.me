import * as React from 'react'
import * as _ from 'lodash'
import Moment from 'react-moment'
import { Card } from '@ashishdotme/ui/components/card'
import { Show } from '../../core/models/show'

const getDates = (startedDate: string, completedDate: string) => {
  return (
    <div>
      {startedDate && (
        <span>
          Started on <Moment format='DD/MM/YYYY'>{startedDate}</Moment>
        </span>
      )}
      {startedDate && completedDate && <br />}
      {completedDate && (
        <span>
          Completed on <Moment format='DD/MM/YYYY'>{completedDate}</Moment>
        </span>
      )}
    </div>
  )
}

const ItemCards = (props: { results: Show[] }) => {
  return (
    <>
      {props.results &&
        props.results.map((item) => (
          <Card
            key={item.id.toString()}
            headline={item.title}
            leftSubtitle={item.year}
            rightSubtitle={item.imdbRating}
            title={getDates(item.startedDate, item.completedDate)}
            tags={item.genre}
          >
            <span>{_.truncate(item.description, { length: 180 })}</span>
          </Card>
        ))}
    </>
  )
}
export default ItemCards
