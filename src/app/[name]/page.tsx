interface Props {
  params: {
    name: string
  }
}

function CountryPage ({ params }: Props) {
  return (
    <div>{params.name}</div>
  )
}

export default CountryPage
