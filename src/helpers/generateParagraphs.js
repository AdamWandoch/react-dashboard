export const generateParagraphs = (number) => {
  const content =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi corrupti voluptatem fugit ratione est excepturi voluptate delectus id saepe laborum quam debitis error, mollitia, enim iure quaerat, vel veritatis autem. Aliquid praesentium rem voluptatem veniam, sunt molestias quos. Possimus facilis expedita vitae dignissimos reprehenderit, beatae labore magnam cumque minima natus perferendis eaque mollitia ipsum cum exercitationem fugiat hic nisi molestiae nobis id fuga ipsam sed alias? Error ipsa, pariatur repudiandae alias harum minima debitis enim aliquid, animi quidem inventore iure aperiam omnis reprehenderit mollitia doloremque culpa quis placeat aut! Soluta obcaecati incidunt natus. Suscipit dolor officia quasi ea nemo magnam voluptate fugiat aliquam doloribus. Cupiditate repellat, iste totam quidem recusandae explicabo ad! Nam neque beatae hic cupiditate dicta, unde error laudantium magni numquam omnis vero sapiente soluta repellat aliquam dolorem nostrum ea ullam suscipit odit mollitia. Libero minus ducimus sint, eveniet illo, aliquam distinctio molestiae aperiam earum nostrum, adipisci eligendi!';
  let paragraphs = [];
  for (let i = 0; i < number; i++) {
    paragraphs.push(content);
  }
  return paragraphs;
};
