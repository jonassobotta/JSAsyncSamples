const foo = () => console.log('foo');
const bla = () => setTimeout(() => console.log('bla'), 1);
const blub = () => console.log('blub');

bla();
foo();
blub();