import { useState } from 'react'
import './App.css'

// ── 1. Квадрат числа ──────────────────────────────────────────────────────────
function square(n) {
  return n * n
}

// ── 2. Делится ли число на 3 ──────────────────────────────────────────────────
function isDivisibleBy3(n) {
  return n % 3 === 0
}

// ── 3. Остаток от деления ─────────────────────────────────────────────────────
function remainder(a, b) {
  return a % b
}

// ── 4. Цельсий → Фаренгейт ───────────────────────────────────────────────────
function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32
}

// ── 5. Наибольшее из трёх чисел ───────────────────────────────────────────────
function maxOfThree(a, b, c) {
  if (a >= b && a >= c) return a
  if (b >= a && b >= c) return b
  return c
}

// ── 6. Строка в верхний регистр ───────────────────────────────────────────────
function toUpperCase(str) {
  return str.toUpperCase()
}

// ── 7. Удаление всех пробелов ─────────────────────────────────────────────────
function removeSpaces(str) {
  return str.split(' ').join('')
}

// ── 8. Замена 'a' на 'o' ──────────────────────────────────────────────────────
function replaceAWithO(str) {
  return str.split('a').join('o')
}

// ── 9. Количество символов без .length ───────────────────────────────────────
function countChars(str) {
  let count = 0
  for (const _ of str) count++
  return count
}

// ── 10. Содержит ли строка подстроку ─────────────────────────────────────────
function containsSubstring(str, sub) {
  return str.indexOf(sub) !== -1
}

// ── 11. Сумма чётных чисел массива ───────────────────────────────────────────
function sumEven(arr) {
  let sum = 0
  for (const n of arr) if (n % 2 === 0) sum += n
  return sum
}

// ── 12. Количество элементов больше заданного числа ──────────────────────────
function countGreaterThan(arr, n) {
  let count = 0
  for (const x of arr) if (x > n) count++
  return count
}

// ── 13. Удалить первый элемент массива ────────────────────────────────────────
function removeFirst(arr) {
  return arr.slice(1)
}

// ── 14. Добавить элемент в начало массива ─────────────────────────────────────
function addToStart(arr, el) {
  return [el, ...arr]
}

// ── 15. Максимальное значение массива ─────────────────────────────────────────
function findMax(arr) {
  let max = arr[0]
  for (const n of arr) if (n > max) max = n
  return max
}

// ── 16. Минимальное значение массива ─────────────────────────────────────────
function findMin(arr) {
  let min = arr[0]
  for (const n of arr) if (n < min) min = n
  return min
}

// ── 17. Разворот массива вручную (без reverse) ────────────────────────────────
function reverseArray(arr) {
  const result = []
  for (let i = arr.length - 1; i >= 0; i--) result.push(arr[i])
  return result
}

// ── 18. Сумма элементов на чётных индексах ────────────────────────────────────
function sumEvenIndices(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i += 2) sum += arr[i]
  return sum
}

// ── 19. Копия массива ─────────────────────────────────────────────────────────
function copyArray(arr) {
  return arr.slice()
}

// ── 20. Есть ли элемент в массиве ────────────────────────────────────────────
function includesElement(arr, el) {
  for (const x of arr) if (x === el) return true
  return false
}

// ── 21-25. Объект пользователя ────────────────────────────────────────────────
const initialUser = { name: 'Алия', age: 20 }

// ── Примеры данных ────────────────────────────────────────────────────────────
const nums = [4, 7, 2, 9, 6, 1, 8, 3]

export default function App() {
  // Задания 21-25: объект
  const [user, setUser] = useState({ ...initialUser })

  // Задание 26: цвет текста при клике
  const [textColor, setTextColor] = useState('#e0e0e0')

  // Задание 27: скрытие элемента
  const [visible, setVisible] = useState(true)

  // Задание 28: показ значения input
  const [inputVal, setInputVal] = useState('')
  const [shownVal, setShownVal] = useState('')

  // Задания 29-30: список + очистка ввода
  const [listInput, setListInput] = useState('')
  const [listItems, setListItems] = useState(['Первый элемент', 'Второй элемент'])

  const colors = ['#f87171', '#fb923c', '#facc15', '#4ade80', '#60a5fa', '#c084fc']
  let colorIdx = 0

  function handleTextColorClick() {
    setTextColor(colors[colorIdx % colors.length])
    colorIdx++
  }

  function handleAddToList() {
    if (!listInput.trim()) return
    setListItems(prev => [...prev, listInput.trim()])
    setListInput('')
  }

  return (
    <div className="app">
      <h1>Практическая работа: JavaScript</h1>

      {/* ──────────────────── ФУНКЦИИ ──────────────────── */}
      <h2 className="section-title">Функции (задания 1–10)</h2>

      <div className="task">
        <h3>1. Квадрат числа</h3>
        <div className="result">
          {`square(5)  → ${square(5)}\nsquare(9)  → ${square(9)}\nsquare(-3) → ${square(-3)}`}
        </div>
      </div>

      <div className="task">
        <h3>2. Делится ли число на 3</h3>
        <div className="result">
          {`isDivisibleBy3(9)  → ${isDivisibleBy3(9)}\nisDivisibleBy3(10) → ${isDivisibleBy3(10)}`}
        </div>
      </div>

      <div className="task">
        <h3>3. Остаток от деления</h3>
        <div className="result">
          {`remainder(10, 3) → ${remainder(10, 3)}\nremainder(15, 4) → ${remainder(15, 4)}`}
        </div>
      </div>

      <div className="task">
        <h3>4. Цельсий → Фаренгейт</h3>
        <div className="result">
          {`celsiusToFahrenheit(0)   → ${celsiusToFahrenheit(0)}\ncelsiusToFahrenheit(100) → ${celsiusToFahrenheit(100)}\ncelsiusToFahrenheit(37)  → ${celsiusToFahrenheit(37)}`}
        </div>
      </div>

      <div className="task">
        <h3>5. Наибольшее из трёх чисел</h3>
        <div className="result">
          {`maxOfThree(3, 7, 5)  → ${maxOfThree(3, 7, 5)}\nmaxOfThree(10, 2, 8) → ${maxOfThree(10, 2, 8)}`}
        </div>
      </div>

      <div className="task">
        <h3>6. Строка в верхний регистр</h3>
        <div className="result">
          {`toUpperCase("hello world") → ${toUpperCase('hello world')}`}
        </div>
      </div>

      <div className="task">
        <h3>7. Удаление всех пробелов из строки</h3>
        <div className="result">
          {`removeSpaces("hello world") → "${removeSpaces('hello world')}"`}
        </div>
      </div>

      <div className="task">
        <h3>8. Замена всех букв "a" на "o"</h3>
        <div className="result">
          {`replaceAWithO("banana") → "${replaceAWithO('banana')}"\nreplaceAWithO("java")   → "${replaceAWithO('java')}"`}
        </div>
      </div>

      <div className="task">
        <h3>9. Количество символов без .length</h3>
        <div className="result">
          {`countChars("JavaScript") → ${countChars('JavaScript')}\ncountChars("Привет")    → ${countChars('Привет')}`}
        </div>
      </div>

      <div className="task">
        <h3>10. Содержит ли строка подстроку</h3>
        <div className="result">
          {`containsSubstring("JavaScript", "Script") → ${containsSubstring('JavaScript', 'Script')}\ncontainsSubstring("JavaScript", "Python") → ${containsSubstring('JavaScript', 'Python')}`}
        </div>
      </div>

      {/* ──────────────────── МАССИВЫ ──────────────────── */}
      <h2 className="section-title">Массивы (задания 11–20)</h2>

      <div className="task">
        <h3>11. Сумма чётных чисел массива</h3>
        <div className="result">
          {`nums = [${nums.join(', ')}]\nsumEven(nums) → ${sumEven(nums)}`}
        </div>
      </div>

      <div className="task">
        <h3>12. Количество элементов больше заданного числа</h3>
        <div className="result">
          {`countGreaterThan(nums, 5) → ${countGreaterThan(nums, 5)}`}
        </div>
      </div>

      <div className="task">
        <h3>13. Удаление первого элемента массива</h3>
        <div className="result">
          {`removeFirst([${nums.join(', ')}]) → [${removeFirst(nums).join(', ')}]`}
        </div>
      </div>

      <div className="task">
        <h3>14. Добавление элемента в начало массива</h3>
        <div className="result">
          {`addToStart([${nums.join(', ')}], 99) → [${addToStart(nums, 99).join(', ')}]`}
        </div>
      </div>

      <div className="task">
        <h3>15. Максимальное значение массива</h3>
        <div className="result">
          {`findMax([${nums.join(', ')}]) → ${findMax(nums)}`}
        </div>
      </div>

      <div className="task">
        <h3>16. Минимальное значение массива</h3>
        <div className="result">
          {`findMin([${nums.join(', ')}]) → ${findMin(nums)}`}
        </div>
      </div>

      <div className="task">
        <h3>17. Разворот массива вручную (без reverse)</h3>
        <div className="result">
          {`reverseArray([${nums.join(', ')}]) → [${reverseArray(nums).join(', ')}]`}
        </div>
      </div>

      <div className="task">
        <h3>18. Сумма элементов на чётных индексах</h3>
        <div className="result">
          {`nums = [${nums.join(', ')}]\nиндексы 0,2,4,6 → ${nums.filter((_, i) => i % 2 === 0).join(' + ')} = ${sumEvenIndices(nums)}`}
        </div>
      </div>

      <div className="task">
        <h3>19. Копия массива</h3>
        <div className="result">
          {(() => {
            const orig = [1, 2, 3]
            const copy = copyArray(orig)
            copy.push(99)
            return `original = [${orig.join(', ')}]\ncopy     = [${copy.join(', ')}]  (независимая копия)`
          })()}
        </div>
      </div>

      <div className="task">
        <h3>20. Есть ли элемент в массиве</h3>
        <div className="result">
          {`includesElement([${nums.join(', ')}], 6) → ${includesElement(nums, 6)}\nincludesElement([${nums.join(', ')}], 5) → ${includesElement(nums, 5)}`}
        </div>
      </div>

      {/* ──────────────────── ОБЪЕКТЫ ──────────────────── */}
      <h2 className="section-title">Объекты (задания 21–25)</h2>

      <div className="task">
        <h3>21. Объект пользователя с полями name и age</h3>
        <div className="result">
          {`const user = ${JSON.stringify(initialUser, null, 2)}`}
        </div>
      </div>

      <div className="task">
        <h3>22. Все ключи объекта</h3>
        <div className="result">
          {`Object.keys(user) → [${Object.keys(user).map(k => `"${k}"`).join(', ')}]`}
        </div>
      </div>

      <div className="task">
        <h3>23. Все значения объекта</h3>
        <div className="result">
          {`Object.values(user) → [${Object.values(user).map(v => JSON.stringify(v)).join(', ')}]`}
        </div>
      </div>

      <div className="task">
        <h3>24. Добавление нового свойства объекту</h3>
        <button onClick={() => setUser(prev => ({ ...prev, email: 'aliya@mail.com' }))}>
          Добавить email
        </button>
        <div className="result" style={{ marginTop: '0.6rem' }}>
          {JSON.stringify(user, null, 2)}
        </div>
      </div>

      <div className="task">
        <h3>25. Удаление свойства из объекта</h3>
        <button
          onClick={() => setUser(prev => {
            const { email, ...rest } = prev
            return rest
          })}
          style={{ background: '#7f1d1d' }}
        >
          Удалить email
        </button>
        <div className="result" style={{ marginTop: '0.6rem' }}>
          {JSON.stringify(user, null, 2)}
        </div>
      </div>

      {/* ──────────────────── DOM / СОБЫТИЯ ──────────────────── */}
      <h2 className="section-title">DOM и события (задания 26–30)</h2>

      <div className="task">
        <h3>26. Изменить цвет текста элемента при клике</h3>
        <p style={{ color: textColor, marginTop: '0.4rem', fontSize: '1rem' }}>
          Этот текст меняет цвет при каждом клике на кнопку
        </p>
        <button onClick={handleTextColorClick}>Изменить цвет текста</button>
      </div>

      <div className="task">
        <h3>27. Скрывать элемент при нажатии кнопки</h3>
        {visible && (
          <div
            style={{
              background: '#1e1b4b',
              padding: '0.7rem',
              borderRadius: '6px',
              marginTop: '0.5rem',
              fontSize: '0.9rem',
            }}
          >
            Я скрытый элемент — нажмите кнопку, чтобы меня спрятать
          </div>
        )}
        <button onClick={() => setVisible(v => !v)} style={{ marginTop: '0.6rem' }}>
          {visible ? 'Скрыть элемент' : 'Показать элемент'}
        </button>
      </div>

      <div className="task">
        <h3>28. Показать значение input при нажатии кнопки</h3>
        <input
          type="text"
          placeholder="Введите что-нибудь..."
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
        />
        <button onClick={() => setShownVal(inputVal)}>Показать значение</button>
        {shownVal && (
          <div className="result" style={{ marginTop: '0.6rem' }}>
            Значение: «{shownVal}»
          </div>
        )}
      </div>

      <div className="task">
        <h3>29. Добавить элемент в список при клике</h3>
        <input
          type="text"
          placeholder="Новый элемент..."
          value={listInput}
          onChange={e => setListInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAddToList()}
        />
        <button onClick={handleAddToList}>Добавить в список</button>
        <ul>
          {listItems.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>

      <div className="task">
        <h3>30. Очистить поле ввода после отправки</h3>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!listInput.trim()) return
            setListItems(prev => [...prev, listInput.trim()])
            setListInput('')
          }}
        >
          <input
            type="text"
            placeholder="Введите текст и нажмите Enter или кнопку..."
            value={listInput}
            onChange={e => setListInput(e.target.value)}
          />
          <button type="submit">Отправить и очистить</button>
        </form>
        <div className="result" style={{ marginTop: '0.6rem' }}>
          {listInput === '' ? 'Поле очищено после отправки ✓' : `Текущее значение: «${listInput}»`}
        </div>
      </div>
    </div>
  )
}
