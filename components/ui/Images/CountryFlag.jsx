const CountryFlag = ({country}) => {
    return <img
    src={`https://osu.ppy.sh/images/flags/${country}.png`}
    alt={country}
  />
}

export default CountryFlag