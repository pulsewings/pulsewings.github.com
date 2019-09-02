import React, { Fragment } from 'react'
import RelatedPosts from './RelatedPosts'
import { Text } from './Commons'

class PrevNextPost extends React.Component {
  render() {
    const { previous, next } = this.props
    const articles = [previous, next]
      .filter(i => i)
      .map(item => ({ node: item }))

    return (
      <Fragment>
        <Text>다음글 읽기 :</Text>
        <RelatedPosts posts={articles} />
      </Fragment>
    )
  }
}

export default PrevNextPost
