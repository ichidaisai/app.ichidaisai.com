export default function Header() {
  return (
    <header className="bg-slate-600 text-white relative overflow-hidden">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold z-10">logo</div>

        <nav className="hidden md:flex items-center space-x-8 z-10">
          <a href="#" className="text-sm hover:opacity-70 transition-opacity">
            企画情報
          </a>
          <a href="#" className="text-sm hover:opacity-70 transition-opacity">
            ニュース
          </a>
          <a href="#" className="text-sm hover:opacity-70 transition-opacity">
            ご案内
          </a>
          <a href="#" className="text-sm hover:opacity-70 transition-opacity">
            マップ
          </a>
          <a href="#" className="text-sm hover:opacity-70 transition-opacity">
            アクセス
          </a>
        </nav>
      </div>
    </header>
  );
}
