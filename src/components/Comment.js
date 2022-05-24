import React, { PureComponent } from 'react';
import Waline from "@waline/client";

export default class Comment extends PureComponent {
  constructor(props) {
    super(props)
    this._commentRef = React.createRef()
  }
  async componentDidMount() {
    if (typeof window === "undefined") {
      return
    }
    if(!this._commentRef.current) {
      return
    }
    this.Waline = new Waline({
      el: this._commentRef.current, 
      visitor: true,
      serverURL: "https://rthmiho-comment.vercel.app",
      dark: 'html[theme="dark"]',
      meta: ['nick', 'mail'],
      wordLimit: 5000,
      path: this.props.slug, 
     })
   }
  render() {
        return <div ref={this._commentRef} id="comment"/>
   }
}