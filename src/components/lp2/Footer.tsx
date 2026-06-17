export default function Footer() {
  return (
    <footer className="bg-[#F4F3F1] border-t border-[#141414]/10 px-6 py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-playfair text-xl text-[#141414] mb-1">Grupo Totum</p>
          <a
            href="https://totum.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm-sans text-sm text-[#3A4A3F] underline underline-offset-2 hover:text-[#2d3b32]"
          >
            totum.com.br
          </a>
        </div>
        <div className="text-right">
          <p className="font-dm-sans text-sm text-[#141414]/60 mb-1">Uma empresa por região. Sem exceção.</p>
          <p className="font-dm-sans text-xs text-[#141414]/40">© 2026 Grupo Totum. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
