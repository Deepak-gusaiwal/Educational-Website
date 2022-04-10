console.log('this is gallery.js');
let galleryImage = [...document.querySelectorAll('.galleryImage')];

galleryImage.forEach((galleryImg)=>{
    let readMoreBtn = galleryImg.querySelectorAll('.productDetail .galleryBtnBox button')[1];
    readMoreBtn.addEventListener('click',()=>{
        // creating div
        let body = document.querySelector('body');
        let createdDiv = document.createElement('div');
        createdDiv.setAttribute('class','createdDiv');

        //creating clone of galleryImage
        let clone = galleryImg.cloneNode(true);
        clone.setAttribute('class','clone');

        //creating detailsDiv
        let detailsDiv = document.createElement('div');
        detailsDiv.setAttribute('class','detailsDiv');

        //appending details of galleryImage in clone div
        let details = clone.querySelector('.productDetail');
        details.setAttribute('class','details');

        // remove read more Btn from detailsDiv
        let readmorebutton = details.querySelectorAll('button')[1];
        readmorebutton.remove();

        // targeting description Box
        let description = clone.querySelector('.description');

        //creating remove button
        let removeBtn = document.createElement('button');
        removeBtn.setAttribute('class','removeCloneBtn');
        removeBtn.append('X');

        body.appendChild(createdDiv);
        createdDiv.appendChild(clone);
        description.appendChild(detailsDiv);
        clone.appendChild(removeBtn);

        

        detailsDiv.append(details);
        removeBtn.addEventListener('click',()=>{
            console.log('click on remove Btn');
            createdDiv.remove();
        });
        console.log(createdDiv);
    })
})