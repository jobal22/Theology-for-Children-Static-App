import React, { Component } from 'react';
import './Read.css';
import {findBook, findChaptersinBook} from '../helpers';
import STORE from '../Store/dummy-store';
import reactStringReplace from 'react-string-replace';
import PopUp from '../PopUp/PopUp';


export default class Read extends Component {

  state = {
    seen: false
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };

  render() {
    const store = STORE
    const books = store.books
    const chapters = store.chapters
    const verses = store.verses
    const verse = verses.map(v=> <p>{v.content} {' '} {v.content}</p>)
    const bookId = this.props.match.params;
    const book = findBook (books, bookId) || {}
    const chapter = findChaptersinBook (chapters, bookId) || {}
    // const cha = chapters.filter(c=> bookId === c.bookId)
    const todo = "Yo I am a servant you hear me a servant! I ate I ateI ate I ateI ate I ateI ate I ateI ate I ateI ate I ateI ate I ateI ate I ateI ate I ateI ate I ateI ate I ateI ate I ateI ate I ateI ate I ateI ate I ateI ate I ateI ate I ate servant."
    const verseContent = verses.map(v=> v.content)
    const verseName = verses.map(v=> v.name)
    const replacedText = reactStringReplace(verseContent, 'servant', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText1 = reactStringReplace(replacedText, 'apostle', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText2 = reactStringReplace(replacedText1, 'faith', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    // const replacedText3 = reactStringReplace(replacedText1, 'God ', (match, i) => (
    //   <button className="btn" onClick={this.togglePop}>{match}</button>
    // ));




    console.log('HEY!', verseName)
    return (
      <div>
        <section>
          <h1>{book.name}</h1>
        </section>
        <section>
          <p> Chapter One </p>
          {replacedText2}{this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
        </section>
      </div>
    )
  }
}
