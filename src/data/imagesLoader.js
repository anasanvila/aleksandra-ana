
function valuesToArray(obj){
    let result =  [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(obj[key]);
        }
    }
    return result;
}

//**  IMAGES FOR "IT PROJECTS" PAGE  *******************************************


function get_Peak_Famehype_ImgArr(){    
    const Peak_Famehype_images = importAll(require.context('../images/it_projects/peak/famehype', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let Peak_Famehype_images = {};
        r.keys().forEach((item) => { Peak_Famehype_images[item.replace('./', '')] = r(item); });
        return Peak_Famehype_images
    } 
    return valuesToArray(Peak_Famehype_images)
}

function get_Peak_PMSv1_ImgArr(){    
    const Peak_PMSv1_images = importAll(require.context('../images/it_projects/peak/pmsv1', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let Peak_PMSv1_images = {};
        r.keys().forEach((item) => { Peak_PMSv1_images[item.replace('./', '')] = r(item); });
        return Peak_PMSv1_images
    } 
    return valuesToArray(Peak_PMSv1_images)
}

function get_Peak_PMSv2_ImgArr(){    
    const Peak_PMSv2_images = importAll(require.context('../images/it_projects/peak/pmsv2', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let Peak_PMSv2_images = {};
        r.keys().forEach((item) => { Peak_PMSv2_images[item.replace('./', '')] = r(item); });
        return Peak_PMSv2_images
    } 
    return valuesToArray(Peak_PMSv2_images)
}

function get_Peak_Cashload_ImgArr(){    
    const peak_Cashload_images = importAll(require.context('../images/it_projects/peak/cashload', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let peak_Cashload_images = {};
        r.keys().forEach((item) => { peak_Cashload_images[item.replace('./', '')] = r(item); });
        return peak_Cashload_images
    } 
    return valuesToArray(peak_Cashload_images)
}

function get_OnPoint_Grabber_ImgArr(){    
    const onPoint_Grabber_images = importAll(require.context('../images/it_projects/onPoint/grabber', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let onPoint_Grabber_images = {};
        r.keys().forEach((item) => { onPoint_Grabber_images[item.replace('./', '')] = r(item); });
        return onPoint_Grabber_images
    } 
    return valuesToArray(onPoint_Grabber_images)
}

function get_OnPoint_SBB_ImgArr(){    
    const onPoint_SBB_images = importAll(require.context('../images/it_projects/onPoint/sbb', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let onPoint_SBB_images = {};
        r.keys().forEach((item) => { onPoint_SBB_images[item.replace('./', '')] = r(item); });
        return onPoint_SBB_images
    } 
    return valuesToArray(onPoint_SBB_images)
}

function get_OnPoint_Engl_ImgArr(){    
    const onPoint_Engl_images = importAll(require.context('../images/it_projects/onPoint/engl', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let onPoint_Engl_images = {};
        r.keys().forEach((item) => { onPoint_Engl_images[item.replace('./', '')] = r(item); });
        return onPoint_Engl_images
    } 
    return valuesToArray(onPoint_Engl_images)
}

function get_OnPoint_Sketches_ImgArr(){    
    const onPoint_Sketches_images = importAll(require.context('../images/it_projects/onPoint/sketches', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let onPoint_Sketches_images = {};
        r.keys().forEach((item) => { onPoint_Sketches_images[item.replace('./', '')] = r(item); });
        return onPoint_Sketches_images
    } 
    return valuesToArray(onPoint_Sketches_images)
}

function get_Freelance_TvShows_ImgArr(){    
    const freelance_TvShows_images = importAll(require.context('../images/it_projects/freelance/tvshows', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let freelance_TvShows_images = {};
        r.keys().forEach((item) => { freelance_TvShows_images[item.replace('./', '')] = r(item); });
        return freelance_TvShows_images
    } 
    return valuesToArray(freelance_TvShows_images)
}

function get_Freelance_ModEx_ImgArr(){    
    const freelance_ModEx_images = importAll(require.context('../images/it_projects/freelance/modelexaminer', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let freelance_ModEx_images = {};
        r.keys().forEach((item) => { freelance_ModEx_images[item.replace('./', '')] = r(item); });
        return freelance_ModEx_images
    } 
    return valuesToArray(freelance_ModEx_images)
}

function get_Freelance_CardGame_ImgArr(){    
    const freelance_CardGame_images = importAll(require.context('../images/it_projects/freelance/cardgame', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let freelance_CardGame_images = {};
        r.keys().forEach((item) => { freelance_CardGame_images[item.replace('./', '')] = r(item); });
        return freelance_CardGame_images
    } 
    return valuesToArray(freelance_CardGame_images)
}

function get_Freelance_Molerova_ImgArr(){    
    const freelance_Molerova_images = importAll(require.context('../images/it_projects/freelance/molerova', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let freelance_Molerova_images = {};
        r.keys().forEach((item) => { freelance_Molerova_images[item.replace('./', '')] = r(item); });
        return freelance_Molerova_images
    } 
    return valuesToArray(freelance_Molerova_images)
}

function get_Itekako_Unity_ImgArr(){    
    const itekako_Unity_images = importAll(require.context('../images/it_projects/itekako/unity', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let itekako_Unity_images = {};
        r.keys().forEach((item) => { itekako_Unity_images[item.replace('./', '')] = r(item); });
        return itekako_Unity_images
    } 
    return valuesToArray(itekako_Unity_images)
}

function get_Itekako_CareerLadder_ImgArr(){    
    const itekako_CareerLadder_images = importAll(require.context('../images/it_projects/itekako/career_ladder', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let itekako_CareerLadder_images = {};
        r.keys().forEach((item) => { itekako_CareerLadder_images[item.replace('./', '')] = r(item); });
        return itekako_CareerLadder_images
    } 
    return valuesToArray(itekako_CareerLadder_images)
}

function get_Itekako_FaliJedan_ImgArr(){    
    const itekako_FaliJedan_images = importAll(require.context('../images/it_projects/itekako/fali_jedan', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let itekako_FaliJedan_images = {};
        r.keys().forEach((item) => { itekako_FaliJedan_images[item.replace('./', '')] = r(item); });
        return itekako_FaliJedan_images
    } 
    return valuesToArray(itekako_FaliJedan_images)
}


const peak_Famehype_ImgArr = get_Peak_Famehype_ImgArr()
const peak_PMSv1_ImgArr = get_Peak_PMSv1_ImgArr()
const peak_PMSv2_ImgArr = get_Peak_PMSv2_ImgArr()
const peak_Cashload_ImgArr = get_Peak_Cashload_ImgArr()
const onPoint_Grabber_ImgArr = get_OnPoint_Grabber_ImgArr()
const onPoint_SBB_ImgArr = get_OnPoint_SBB_ImgArr()
const onPoint_Engl_ImgArr = get_OnPoint_Engl_ImgArr()
const onPoint_Sketches_ImgArr = get_OnPoint_Sketches_ImgArr()
const freelance_TvShows_ImgArr = get_Freelance_TvShows_ImgArr()
const freelance_ModEx_ImgArr = get_Freelance_ModEx_ImgArr() 
const freelance_CardGame_ImgArr = get_Freelance_CardGame_ImgArr()
const freelance_Molerova_ImgArr = get_Freelance_Molerova_ImgArr()
const itekako_Unity_ImgArr = get_Itekako_Unity_ImgArr()
const itekako_CareerLadder_ImgArr = get_Itekako_CareerLadder_ImgArr()
const itekako_FaliJedan_ImgArr = get_Itekako_FaliJedan_ImgArr()

export {
    peak_Famehype_ImgArr,
    peak_PMSv1_ImgArr, 
    peak_PMSv2_ImgArr,
    peak_Cashload_ImgArr,
    onPoint_Grabber_ImgArr,
    onPoint_SBB_ImgArr,
    onPoint_Engl_ImgArr,
    onPoint_Sketches_ImgArr,
    freelance_TvShows_ImgArr,
    freelance_ModEx_ImgArr,
    freelance_CardGame_ImgArr,
    freelance_Molerova_ImgArr,
    itekako_Unity_ImgArr,
    itekako_CareerLadder_ImgArr,
    itekako_FaliJedan_ImgArr
}

//**  IMAGES FOR "DESIGN" PAGE  ********************************************************


function get_TKP_ImgArr(){    
    const TKP_images = importAll(require.context('../images/design/tkp', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let TKP_images = {};
        r.keys().forEach((item) => { TKP_images[item.replace('./', '')] = r(item); });
        return TKP_images
    } 
    return   valuesToArray(TKP_images)
}

function get_TKP2_ImgArr(){    
    const TKP2_images = importAll(require.context('../images/design/tkp2', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let TKP2_images = {};
        r.keys().forEach((item) => { TKP2_images[item.replace('./', '')] = r(item); });
        return TKP2_images
    } 
    return   valuesToArray(TKP2_images)
}

function get_Hipergradnja_ImgArr(){    
    const Hipergradnja_images = importAll(require.context('../images/design/hipergradnja', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let Hipergradnja_images = {};
        r.keys().forEach((item) => { Hipergradnja_images[item.replace('./', '')] = r(item); });
        return Hipergradnja_images
    } 
    return valuesToArray(Hipergradnja_images)
}

function get_FaliJedanLogo_ImgArr(){    
    const faliJedanLogo_images = importAll(require.context('../images/design/fali_jedan_logo', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let faliJedanLogo_images = {};
        r.keys().forEach((item) => { faliJedanLogo_images[item.replace('./', '')] = r(item); });
        return faliJedanLogo_images
    } 
    return valuesToArray(faliJedanLogo_images)
}

function get_FaliJedanLogo2_ImgArr(){    
    const faliJedanLogo2_images = importAll(require.context('../images/design/fali_jedan_logo2', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let faliJedanLogo2_images = {};
        r.keys().forEach((item) => { faliJedanLogo2_images[item.replace('./', '')] = r(item); });
        return faliJedanLogo2_images
    } 
    return valuesToArray(faliJedanLogo2_images)
}


function get_HandDrawn_ImgArr(){    
    const handdrawn_images = importAll(require.context('../images/design/hand_drawn', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let handdrawn_images = {};
        r.keys().forEach((item) => { handdrawn_images[item.replace('./', '')] = r(item); });
        return handdrawn_images
    } 
    return valuesToArray(handdrawn_images)
}

function get_Sketches_ImgArr(){    
    const sketches_images = importAll(require.context('../images/design/hand_drawn/sketches', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let sketches_images = {};
        r.keys().forEach((item) => { sketches_images[item.replace('./', '')] = r(item); });
        return sketches_images
    } 
    return valuesToArray(sketches_images)
}

function get_Bckg_ImgArr(){    
    const bckg_images = importAll(require.context('../images/design/background', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let bckg_images = {};
        r.keys().forEach((item) => { bckg_images[item.replace('./', '')] = r(item); });
        return bckg_images
    } 
    return valuesToArray(bckg_images)
}

const tkp_ImgArr = get_TKP_ImgArr()
const tkp2_ImgArr = get_TKP2_ImgArr()
const hiperGradnja_ImgArr = get_Hipergradnja_ImgArr()
const faliJedanLogo_ImgArr = get_FaliJedanLogo_ImgArr()
const faliJedanLogo2_ImgArr = get_FaliJedanLogo2_ImgArr()
const hand_drawn_ImgArr = get_HandDrawn_ImgArr()
const sketches_ImgArr = get_Sketches_ImgArr()
const background_ImgArr = get_Bckg_ImgArr()

export {
    tkp_ImgArr,
    tkp2_ImgArr,
    hiperGradnja_ImgArr,
    faliJedanLogo_ImgArr,
    faliJedanLogo2_ImgArr,
    hand_drawn_ImgArr,
    sketches_ImgArr,
    background_ImgArr
}


//**  IMAGES FOR "ARCHITECTURE" PAGE  ***************************************************


function get_MM_ImgArr(){    
    const mm_images = importAll(require.context('../images/architecture/mm', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let mm_images = {};
        r.keys().forEach((item) => { mm_images[item.replace('./', '')] = r(item); });
        return mm_images
    } 
    return valuesToArray(mm_images)
}

function get_Museum_ImgArr(){    
    const museum_images = importAll(require.context('../images/architecture/museum', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let museum_images = {};
        r.keys().forEach((item) => { museum_images[item.replace('./', '')] = r(item); });
        return museum_images
    } 
    return valuesToArray(museum_images)
}

function get_Hotel_ImgArr(){    
    const hotel_images = importAll(require.context('../images/architecture/hotel', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let hotel_images = {};
        r.keys().forEach((item) => { hotel_images[item.replace('./', '')] = r(item); });
        return hotel_images
    } 
    return valuesToArray(hotel_images)
}

function get_Master_ImgArr(){    
    const master_images = importAll(require.context('../images/architecture/master', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let master_images = {};
        r.keys().forEach((item) => { master_images[item.replace('./', '')] = r(item); });
        return master_images
    } 
    return valuesToArray(master_images)
}

function get_Villa_ImgArr(){    
    const villa_images = importAll(require.context('../images/architecture/villa', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let villa_images = {};
        r.keys().forEach((item) => { villa_images[item.replace('./', '')] = r(item); });
        return villa_images
    } 
    return valuesToArray(villa_images)
}


function get_Takovska_ImgArr(){    
    const takovska_images = importAll(require.context('../images/architecture/takovska', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let takovska_images = {};
        r.keys().forEach((item) => { takovska_images[item.replace('./', '')] = r(item); });
        return takovska_images
    } 
    return valuesToArray(takovska_images)
}


const mm_ImgArr = get_MM_ImgArr()
const museum_ImgArr = get_Museum_ImgArr()
const master_ImgArr = get_Master_ImgArr()
const villa_ImgArr = get_Villa_ImgArr()
const takovska_ImgArr = get_Takovska_ImgArr()
const hotel_ImgArr = get_Hotel_ImgArr()

export {
    mm_ImgArr,
    museum_ImgArr,
    master_ImgArr,
    villa_ImgArr,
    takovska_ImgArr,
    hotel_ImgArr
}



//**  IMAGES FOR "EDUCATION" PAGE  ***************************************************


function get_Edu_Academic_ImgArr(){    
    const edu_academic_images = importAll(require.context('../images/education/academic', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let edu_academic_images = {};
        r.keys().forEach((item) => { edu_academic_images[item.replace('./', '')] = r(item); });
        return edu_academic_images
    } 
    return valuesToArray(edu_academic_images)
}

function get_Edu_ImgArr(){    
    const edu_images = importAll(require.context('../images/education/edu', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let edu_images = {};
        r.keys().forEach((item) => { edu_images[item.replace('./', '')] = r(item); });
        return edu_images
    } 
    return valuesToArray(edu_images)
}

function get_Edu_Award_ImgArr(){    
    const edu_award_images = importAll(require.context('../images/education/award', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let edu_award_images = {};
        r.keys().forEach((item) => { edu_award_images[item.replace('./', '')] = r(item); });
        return edu_award_images
    } 
    return valuesToArray(edu_award_images)
}

function get_Edu_Conferences_ImgArr(){    
    const edu_conferences_images = importAll(require.context('../images/education/conferences', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let edu_conferences_images = {};
        r.keys().forEach((item) => { edu_conferences_images[item.replace('./', '')] = r(item); });
        return edu_conferences_images
    } 
    return valuesToArray(edu_conferences_images)
}

function get_Edu_Courses_ImgArr(){    
    const edu_courses_images = importAll(require.context('../images/education/courses', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let edu_courses_images = {};
        r.keys().forEach((item) => { edu_courses_images[item.replace('./', '')] = r(item); });
        return edu_courses_images
    } 
    return valuesToArray(edu_courses_images)
}

function get_Edu_Exibitions_ImgArr(){    
    const edu_exibitions_images = importAll(require.context('../images/education/exibitions', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let edu_exibitions_images = {};
        r.keys().forEach((item) => { edu_exibitions_images[item.replace('./', '')] = r(item); });
        return edu_exibitions_images
    } 
    return valuesToArray(edu_exibitions_images)
}

function get_Edu_Certifications_ImgArr(){    
    const edu_certification_images = importAll(require.context('../images/education/certifications', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let edu_certification_images = {};
        r.keys().forEach((item) => { edu_certification_images[item.replace('./', '')] = r(item); });
        return edu_certification_images
    } 
    return valuesToArray(edu_certification_images)
}

function get_Edu_Recommendations_ImgArr(){    
    const edu_recommendation_images = importAll(require.context('../images/education/recommendations', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let edu_recommendation_images = {};
        r.keys().forEach((item) => { edu_recommendation_images[item.replace('./', '')] = r(item); });
        return edu_recommendation_images
    } 
    return valuesToArray(edu_recommendation_images)
}

const edu_ImgArr = get_Edu_ImgArr()
const edu_academic_ImgArr = get_Edu_Academic_ImgArr()
const edu_award_ImgArr = get_Edu_Award_ImgArr()
const edu_conferences_ImgArr = get_Edu_Conferences_ImgArr()
const edu_courses_ImgArr = get_Edu_Courses_ImgArr()
const edu_exibitions_ImgArr = get_Edu_Exibitions_ImgArr()
const edu_certification_ImgArr = get_Edu_Certifications_ImgArr()
const edu_recommendations_ImgArr = get_Edu_Recommendations_ImgArr()


export {
    edu_ImgArr,
    edu_academic_ImgArr,
    edu_award_ImgArr,
    edu_conferences_ImgArr,
    edu_courses_ImgArr,
    edu_exibitions_ImgArr,
    edu_certification_ImgArr,
    edu_recommendations_ImgArr
}