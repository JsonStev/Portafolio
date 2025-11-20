const d = document;

export default function slider(){
    const $prev = d.querySelector(".slider-botoms .prev"),
    $next = d.querySelector(".slider-botoms .next"),
    $slides = d.querySelectorAll(".slider-slide")

    let i = 0;

    d.addEventListener("click", (e)=>{
        if(e.target === $prev){
            e.preventDefault()
            $slides[i].classList.remove("active");
            i--;

            if(i < 0){
                i = $slides.length -1;
            }

            $slides[i].classList.add("active");
        }

        if(e.target === $next){
            e.preventDefault()
            $slides[i].classList.remove("active");
            i++;

            if(i > $slides.length){
                i = $slides.length -1;
            }

            $slides[i].classList.add("active")
        }
    })
}
