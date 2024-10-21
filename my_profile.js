const hello = [
    '안녕하세요.',
    '오늘도 좋은 하루 되세요.',
    '좋은 오후입니다.',
    '반가워요.',
    '항상 행복하세요.',
    '좋은 물건은 찾으셨나요?',
    '필요한 것이 있으신가요?',
    '도움이 필요하시면 말씀해주세요.',
    '당신의 근처에 당근 마켓🥕',
    '이웃과 함께 해요.',
    '나눌수록 기쁨은 커져요.',
    '합리적인 가격으로 쇼핑하세요.',
    '오늘도 당근🥕하세요.',
    '환경을 생각하는 마음, 늘 감사합니다.'
];

const tmp=document.getElementById('carrot');
tmp.addEventListener("load", helloWorld());

function helloWorld() {
    const key = Math.floor(Math.random() * hello.length);
    const sentence = hello[key];
   
    document.getElementById('carrot').innerText=sentence;
}