// 1. ضع الرابط الذي حصلت عليه بعد عملية الـ Deploy هنا
const scriptURL = 'https://script.google.com/macros/s/AKfycbziE1qJ48qxmzK1iYSWqXcZUtrX2UisHdopqKy4eCMLx-dnHJFw7RytdTICk75orENU/exec'; 

const form = document.getElementById('suggestion-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // تغيير شكل الزر لإعلام المستخدم أن العملية جارية
    const submitBtn = form.querySelector('.btn-submit');
    submitBtn.innerText = "جاري إرسال فكرتك...";
    submitBtn.disabled = true;

    // تجهيز البيانات لإرسالها
    const formData = new FormData(form);
    
    fetch(scriptURL, { 
        method: 'POST', 
        body: formData // إرسال البيانات مباشرة
    })
    .then(response => {
        alert('رائع! وصلتنا فكرتك وسنقوم بمراجعتها قريباً.');
        form.reset(); // تفريغ الخانات
        submitBtn.innerText = "إرسال الفكرة";
        submitBtn.disabled = false;
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert('حدث خطأ، يرجى التحقق من اتصالك بالإنترنت.');
        submitBtn.disabled = false;
    });
});