
const Footer = () => {
  return (
    <footer className="p-4 bg-nav-color fixed bottom-0 left-0 w-full border-t border-gray">
        <div className="flex justify-center">
            <p className="p-2 text-white">go/links take home assignment by Ronnie Rios</p>
            <p className="p-2 text-white"><a href="https://github.com/ronnie-rios" target="blank" rel="noopener" className="hover:bg-gray hover:rounded hover:p-2">Ronnie's GitHub</a></p>
            <p className="p-2 text-white"><a href="https://www.linkedin.com/in/ronnie-rios" target="blank" rel="noopener" className="hover:bg-gray hover:rounded hover:p-2">Ronnie's LinkedIn</a></p>
        </div>
    </footer>
  )
}

export default Footer