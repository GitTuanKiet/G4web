import Button from 'components/Button'

function PageNotFound() {
  return (
    <div _id="page-not-found" className="relative">
      <div className="text-center absolute bottom-[200px] flex flex-col gap-5 ">
        <h2 className="font-medium">Opps! Page not found </h2>
        <p>Something went wrong. Page not found</p>
        <Button to="/">Go to home</Button>
      </div>
    </div>
  )
}

export default PageNotFound
