function Expirience() {
  return (
    <>
      <h2 className="text-2xl font-bold text-primary-navy dark:text-primary-blue uppercase">
        Досвід
      </h2>
      <div className="w-20 h-0.75 bg-primary-navy dark:bg-primary-blue mt-2 mb-5"></div>

      <ul className="list-disc pl-5 space-y-6 text-text-base">
        <li>
          <strong className="block">Розробка власних проєктів</strong>
          <p className="text-text-base mt-1">
            Створення гри BTW та вебсайту для книжкового видавництва. Практичне застосування знань з верстки та логіки додатків.
          </p>
        </li>
        <li>
          <strong className="block">Академічна практика</strong>
          <p className="text-text-base mt-1">
            Виконання лабораторних робіт з розгортання React-додатків та налаштування середовища розробки.
          </p>
        </li>
      </ul>
    </>
  );
}

export default Expirience;
