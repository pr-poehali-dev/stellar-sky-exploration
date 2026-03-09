import { useState } from "react"
import Icon from "@/components/ui/icon"

const slides = [
  {
    id: 1,
    label: "Введение",
    title: "Октановая кислота",
    subtitle: "CH₃(CH₂)₆COOH",
    content: "Насыщенная жирная кислота с 8 атомами углерода. Встречается в природе и активно используется в промышленности.",
    note: "",
  },
  {
    id: 2,
    label: "В природе",
    title: "В природе",
    subtitle: "",
    content: "",
    bullets: [
      "Содержится в кокосовом масле (~8%)",
      "Присутствует в пальмовом масле и молоке животных",
      "Входит в состав грудного молока",
      "Вырабатывается некоторыми растениями как защитное вещество",
      "Придаёт характерный запах козьему и коровьему молоку",
    ],
    note: "",
  },
  {
    id: 3,
    label: "Свойства",
    title: "Физические свойства",
    subtitle: "",
    content: "",
    bullets: [
      "Маслянистая жидкость с резким запахом",
      "Температура плавления: 16–17 °C",
      "Температура кипения: 239–240 °C",
      "Плохо растворима в воде",
      "Хорошо растворима в органических растворителях",
    ],
    note: "",
  },
  {
    id: 4,
    label: "Производство",
    title: "Производство",
    subtitle: "",
    content: "",
    bullets: [
      "Получают гидролизом кокосового и пальмового масла",
      "Синтезируют окислением октанола",
      "Производят ферментацией органических субстратов",
      "Мировое производство — десятки тысяч тонн в год",
    ],
    note: "",
  },
  {
    id: 5,
    label: "Применение",
    title: "Применение в промышленности",
    subtitle: "",
    content: "",
    bullets: [
      "Производство пищевых добавок (E570)",
      "Компонент парфюмерии и ароматизаторов",
      "Антигрибковые и антибактериальные препараты",
      "Пластификаторы и смазочные материалы",
      "Основа для эфиров — растворители и биодизель",
    ],
    note: "",
  },
  {
    id: 6,
    label: "Итог",
    title: "Вывод",
    subtitle: "",
    content: "Октановая кислота — широко распространённое природное соединение с ценными химическими свойствами. Её доступность из растительного сырья и многофункциональность делают её важным компонентом современной промышленности.",
    note: "Спасибо за внимание",
  },
]

const Index = () => {
  const [current, setCurrent] = useState(0)

  const slide = slides[current]

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1))

  return (
    <div className="min-h-screen bg-[#f5f3ef] flex flex-col" style={{ fontFamily: "'Georgia', serif" }}>

      {/* Top bar */}
      <div className="flex items-center justify-between px-10 py-5 border-b border-gray-200">
        <span className="text-gray-400 text-sm tracking-widest uppercase">Химия · 9 класс</span>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-gray-700 w-5" : "bg-gray-300"}`}
            />
          ))}
        </div>
        <span className="text-gray-400 text-sm">{current + 1} / {slides.length}</span>
      </div>

      {/* Slide content */}
      <div className="flex-1 flex flex-col justify-center px-16 py-12 max-w-4xl mx-auto w-full">

        {slide.label && (
          <p className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-6">{slide.label}</p>
        )}

        <h1 className="text-5xl font-normal text-gray-800 mb-3 leading-tight">
          {slide.title}
        </h1>

        {slide.subtitle && (
          <p className="text-2xl text-gray-400 font-mono mb-8">{slide.subtitle}</p>
        )}

        {slide.content && (
          <p className="text-gray-600 text-xl font-light leading-relaxed mb-8 max-w-2xl" style={{ fontFamily: "sans-serif" }}>
            {slide.content}
          </p>
        )}

        {slide.bullets && (
          <ul className="space-y-4 mt-2">
            {slide.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600 text-lg" style={{ fontFamily: "sans-serif" }}>
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        )}

        {slide.note && (
          <p className="mt-12 text-gray-400 text-base italic">{slide.note}</p>
        )}
      </div>

      {/* Bottom navigation */}
      <div className="flex items-center justify-between px-10 py-6 border-t border-gray-200">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-2 text-gray-400 hover:text-gray-700 disabled:opacity-20 transition-colors text-sm"
          style={{ fontFamily: "sans-serif" }}
        >
          <Icon name="ArrowLeft" size={16} />
          Назад
        </button>

        <span className="text-gray-300 text-xs tracking-widest uppercase" style={{ fontFamily: "sans-serif" }}>
          Октановая кислота в природе и на производстве
        </span>

        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="flex items-center gap-2 text-gray-400 hover:text-gray-700 disabled:opacity-20 transition-colors text-sm"
          style={{ fontFamily: "sans-serif" }}
        >
          Далее
          <Icon name="ArrowRight" size={16} />
        </button>
      </div>
    </div>
  )
}

export default Index
