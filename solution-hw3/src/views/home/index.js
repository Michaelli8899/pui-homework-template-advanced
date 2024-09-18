
import ShopItem from './ShopItem.js';
import NavBar from './NavBar.js';



function Index () {
  return (
    <div>
      <div>
        <NavBar  imageUrl = {`${process.env.PUBLIC_URL}/assets/logo/logo-01.svg`}/>
      </div>
      <body>
        <main>
          <div className = "shop-row">
            <ShopItem   imageUrl = {`${process.env.PUBLIC_URL}/assets/products/original-cinnamon-roll.jpg`}
                        altText = 'original cinnamon roll'
                        itemName = 'Original cinnamon roll'
                        price = '2.49'/>
            <ShopItem   imageUrl = {`${process.env.PUBLIC_URL}/assets/products/apple-cinnamon-roll.jpg`}
                        altText = 'apple cinnamon roll'
                        itemName = 'Apple cinnamon roll'
                        price = '3.49'/>
            <ShopItem   imageUrl = {`${process.env.PUBLIC_URL}/assets/products/raisin-cinnamon-roll.jpg`}
                        altText = 'raisin cinnamon roll'
                        itemName = 'Raisin cinnamon roll'
                        price = '2.99'/>
          </div>
          <div className = "shop-row">
            <ShopItem   imageUrl = {`${process.env.PUBLIC_URL}/assets/products/walnut-cinnamon-roll.jpg`}
                        altText = 'walnut cinnamon roll'
                        itemName = 'Walnut cinnamon roll'
                        price = '3.49'/>
            <ShopItem   imageUrl = {`${process.env.PUBLIC_URL}/assets/products/double-chocolate-cinnamon-roll.jpg`}
                        altText = 'double-chocolate cinnamon roll'
                        itemName = 'Double-chocolate cinnamon roll'
                        price = '3.99'/>
            <ShopItem   imageUrl = {`${process.env.PUBLIC_URL}/assets/products/strawberry-cinnamon-roll.jpg`}
                        altText = 'strawberry cinnamon roll'
                        itemName = 'Strawberry cinnamon roll'
                        price = '3.99'/>
          </div>
        </main>
                
      </body>
    </div>
  );
}

export default Index;