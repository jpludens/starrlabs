const initial = {
  foo: 'bar'
};

export default function stub(state = initial, action) {
  console.log('stub reducer called');
  console.log(action);
  return {};
}

