const Shadow = ({ theme }) => (
  <svg width='100' height='80' viewBox='0 0 200 200' className='axie-shadow-svg'>
    <defs>
      <filter id='dropshadow' width='180%' height='180%' filterUnits='userSpaceOnUse'>
        <feGaussianBlur in='SourceAlpha' stdDeviation='3' />
        <feMerge>
          <feMergeNode />
          <feMergeNode in='SourceGraphic' />
          <feMergeNode in='SourceGraphic' />
        </feMerge>
      </filter>
    </defs>
    <ellipse cx='50%' cy='50%' rx='120' ry='70' className={theme === 'light' ? 'axie-shadow' : 'axie-dark-shadow'} />
  </svg>
)

export default Shadow
