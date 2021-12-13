export default function ProfileContent() {
  return (
    <div class='profile'>
      <div class='profile-pic'>
        <div class='header-color'></div>
        <img
          src='https://anniedotexe.github.io/hosted-assets/dailyui/dailyui006/profile-pic.jpg'
          alt='someone'
        />
      </div>
      <div class='title'>
        <h1>Samson Ajulor</h1>
        <h2>
          <span class='highlighted'>Class:</span> SS3
        </h2>
      </div>
      <div class='description'>
        <h4>About</h4>
        <p>I love JS</p>
        <div class='flex'>
          <div class='flexbox'>
            <h5>Age: 12</h5>
            <hr />
            <h5>Gender: Male</h5>
          </div>
          <div class='flexbox'>
            <h5>DOB: 21/01/1992</h5>
            <hr />
            <h5>Address: Newyork</h5>
          </div>
        </div>
      </div>
      <div class='flex'>
        <button class='follow'>Phone</button>
        <button class='follow'>Message</button>
      </div>
    </div>
  )
}
