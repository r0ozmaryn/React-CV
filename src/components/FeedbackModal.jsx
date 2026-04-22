function FeedbackModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-card-bg w-full max-w-lg rounded-xl shadow-2xl p-6 relative animate-in fade-in zoom-in">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-text-muted bg-main-bg hover:text-text-base px-2.5 py-1 rounded-full cursor-pointer"
        >
          ✕
        </button>

        <h3 className="text-2xl font-bold text-primary-navy dark:text-white mb-2">
          Зворотній зв'язок
        </h3>
        <p className="text-sm text-text-muted mb-6">
          Залиште повідомлення, і я зв'яжуся з вами найближчим часом.
        </p>

        <form action="https://formspree.io/f/xwvwglyv" method="POST" className="space-y-4">
          <input 
            type="text" name="name" placeholder="Ваше ім'я" required 
            className="w-full px-4 py-2.5 rounded-md border border-border-subtle bg-transparent text-text-base focus:ring-1 focus:ring-primary-blue outline-none"
          />
          <input 
            type="email" name="email" placeholder="Електронна пошта" required 
            className="w-full px-4 py-2.5 rounded-md border border-border-subtle bg-transparent text-text-base focus:ring-1 focus:ring-primary-blue outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Номер телефону"
            className="w-full px-4 py-2.5 rounded-md border border-border-subtle bg-transparent text-text-base focus:ring-1 focus:ring-primary-blue outline-none"
          />
          <textarea 
            name="message" placeholder="Ваше повідомлення" rows="4" 
            className="w-full px-4 py-2.5 rounded-md border border-border-subtle bg-transparent text-text-base focus:ring-1 focus:ring-primary-blue outline-none min-h-[100px]"
          ></textarea>

          <button 
            type="submit"
            className="w-full bg-primary-navy dark:bg-primary-blue text-white font-semibold py-3 rounded-lg shadow-md hover:opacity-90"
          >
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackModal
