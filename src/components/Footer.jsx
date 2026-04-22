const getSystemInfo = () => {
  const storageData = localStorage.getItem('sys_info');
  if (storageData) return storageData;

  const data = `Браузер: ${navigator.userAgent}, Платформа: ${navigator.platform}`;
  localStorage.setItem('sys_info', data);
  return data;
};

const sysInfo = getSystemInfo();

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-primary-navy dark:bg-primary-blue text-white dark:text-black p-8 font-mono shadow-2xl z-[1000]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-8">
        <div>
          <p className="font-bold uppercase tracking-widest">System Info</p>
          <p className="opacity-80">{sysInfo}</p>
        </div>
        <p className="mt-4 md:mt-0 opacity-60">© 2026 M. Stasiv</p>
      </div>
    </footer>
  )
}

export default Footer
