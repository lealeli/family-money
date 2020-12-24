import React from "react";
import ListGoods from "./goods/ListGoods";
import Context from "./context";
import AddGoods from "./goods/AddGoods";

function App() {
  const [goods, setGoods] = React.useState([
        {id: 1, date: `1 июля 2020`, tag: [`продукты`, `бытовая химия`], comment: `Пятерочка`, price: 2250},
        {id: 2, date: `2 июля 2020`, tag: [`одежда`, `продукты`], comment: `Юникло`, price: 5250},
        {id: 3, date: `3 июля 2020`, tag: [`няня`, `отдых`, `продукты`], comment: `Перекресток`, price: 3200}])

  function changeGood(e) {
    e.preventDefault();
    console.log('По мне кликнули.');
  }

  function removeGood(id) {
      setGoods(goods.filter(good => good.id !== id))
  }

  function addGood(title) {
      setGoods(goods.concat([
          {
              id: goods.length + 1,
              date: title.date,
              tag: title.tag,
              comment: title.comment,
              price: title.price
          }
          ]))
  }

  return (
      <Context.Provider value={{removeGood}}>
          <div>
              <h1>Список покупок</h1>
              <AddGoods onCreate={addGood}/>
              {goods.length ? <ListGoods good={goods} onChangeGood={changeGood}/> : <p>У вас еще нет покупок</p>}

          </div>
      </Context.Provider>
  );
}

export default App;
