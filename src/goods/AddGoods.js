import React, {useState} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Creatable from 'react-select/creatable';

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: (arg) => setValue(arg ? arg : ''),
        value: () => value
    }
}

function AddGoods({onCreate}) {
    const tag = useInputValue([])
    const price = useInputValue('')
    const date = useInputValue(moment().format('yyyy-MM-DD'))
    const comment = useInputValue('')

    const [selectedValues, setSelectedValues] = useState();
    function onChangeSel(s) {
        setSelectedValues(s)
    }


    function submitHandler(event) {
        event.preventDefault()
        onCreate({tag: selectedValues.map(el => el.value), price: price.value(), date: date.value(), comment: comment.value()})
        tag.clear()
        price.clear()
        date.clear(moment().format('yyyy-MM-DD'))
        comment.clear()
    }

        return (
            <form onSubmit={submitHandler}>
                <label>
                    Теги категорий:
                    <div>
                        <Creatable
                            isClearable isMulti onChange={onChangeSel}/>
                    </div>
                </label>
                <br />
                <label>
                    Сумма:
                    <input
                        type="number"
                        value={price.bind.value}
                        onChange={price.bind.onChange}
                        />
                </label>
                <label>
                    Дата:
                    <input
                        type="date"
                        {...date.bind} />
                </label>
                <label>
                    Комментарий:
                    <input
                        type="text"
                        {...comment.bind} />
                </label>
                <button type='submit'>Добавить покупку</button>
            </form>
        );
}

AddGoods.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddGoods
