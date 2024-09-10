import PerfectScrollbar from 'react-perfect-scrollbar';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from '../../components/Dropdown';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconNotes from '../../components/Icon/IconNotes';
import IconNotesEdit from '../../components/Icon/IconNotesEdit';
import IconStar from '../../components/Icon/IconStar';
import IconSquareRotated from '../../components/Icon/IconSquareRotated';
import IconPlus from '../../components/Icon/IconPlus';
import IconMenu from '../../components/Icon/IconMenu';
import IconUser from '../../components/Icon/IconUser';
import IconTrashLines from '../../components/Icon/IconTrashLines';
import RegistrationForm from './RegistrationForm';

const Notes = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Students'));
    });

    const [notesList, setNoteList] = useState([
        {
            id: 1,
            user: 'Max Smith',
            thumb: 'profile-16.jpeg',
            title: 'Branch',
            description: 'SFL',
            date: '00024-24-0624',
            isFav: false,
            tag: 'personal',
        },
        {
            id: 2,
            user: 'John Doe',
            thumb: 'profile-14.jpeg',
            title: 'Receive Package',
            description: 'Facilisis curabitur facilisis vel elit sed dapibus sodales purus.',
            date: '11/02/2020',
            isFav: true,
            tag: '',
        },
        {
            id: 3,
            user: 'Kia Jain',
            thumb: 'profile-15.jpeg',
            title: 'Download Docs',
            description: 'Proin a dui malesuada, laoreet mi vel, imperdiet diam quam laoreet.',
            date: '11/04/2020',
            isFav: false,
            tag: 'work',
        },
        {
            id: 4,
            user: 'Max Smith',
            thumb: 'profile-16.jpeg',
            title: 'Meeting at 4:50pm',
            description: 'Excepteur sint occaecat cupidatat non proident, anim id est laborum.',
            date: '11/08/2020',
            isFav: false,
            tag: '',
        },
        {
            id: 5,
            user: 'Karena Courtliff',
            thumb: 'profile-17.jpeg',
            title: 'Backup Files EOD',
            description: 'Maecenas condimentum neque mollis, egestas leo ut, gravida.',
            date: '11/09/2020',
            isFav: false,
            tag: '',
        },
        {
            id: 6,
            user: 'Max Smith',
            thumb: 'profile-16.jpeg',
            title: 'Download Server Logs',
            description: 'Suspendisse efficitur diam quis gravida. Nunc molestie est eros.',
            date: '11/09/2020',
            isFav: false,
            tag: 'social',
        },
        {
            id: 7,
            user: 'Vladamir Koschek',
            thumb: '',
            title: 'Team meet at Starbucks',
            description: 'Etiam a odio eget enim aliquet laoreet lobortis sed ornare nibh.',
            date: '11/10/2020',
            isFav: false,
            tag: '',
        },
        {
            id: 8,
            user: 'Max Smith',
            thumb: 'profile-16.jpeg',
            title: 'Create new users Profile',
            description: 'Duis aute irure in nulla pariatur. Etiam a odio eget enim aliquet.',
            date: '11/11/2020',
            isFav: false,
            tag: 'important',
        },
        {
            id: 9,
            user: 'Robert Garcia',
            thumb: 'profile-21.jpeg',
            title: 'Create a compost pile',
            description: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.',
            date: '11/12/2020',
            isFav: true,
            tag: '',
        },
        {
            id: 10,
            user: 'Marie Hamilton',
            thumb: 'profile-2.jpeg',
            title: 'Take a hike at a local park',
            description: 'De carne lumbering animata corpora quaeritis. Summus brains sit',
            date: '11/13/2020',
            isFav: true,
            tag: '',
        },
        {
            id: 11,
            user: 'Megan Meyers',
            thumb: 'profile-1.jpeg',
            title: 'Take a class at local community center that interests you',
            description: 'Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin.',
            date: '11/13/2020',
            isFav: false,
            tag: '',
        },
        {
            id: 12,
            user: 'Angela Hull',
            thumb: 'profile-22.jpeg',
            title: 'Research a topic interested in',
            description: 'Lemon drops tootsie roll marshmallow halvah carrot cake.',
            date: '11/14/2020',
            isFav: false,
            tag: '',
        },
        {
            id: 13,
            user: 'Karen Wolf',
            thumb: 'profile-23.jpeg',
            title: 'Plan a trip to another country',
            description: 'Space, the final frontier. These are the voyages of the Starship Enterprise.',
            date: '11/16/2020',
            isFav: true,
            tag: '',
        },
        {
            id: 14,
            user: 'Jasmine Barnes',
            thumb: 'profile-1.jpeg',
            title: 'Improve touch typing',
            description: 'Well, the way they make shows is, they make one show.',
            date: '11/16/2020',
            isFav: false,
            tag: '',
        },
        {
            id: 15,
            user: 'Thomas Cox',
            thumb: 'profile-11.jpeg',
            title: 'Learn Express.js',
            description: 'Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '11/17/2020',
            isFav: false,
            tag: 'work',
        },
        {
            id: 16,
            user: 'Marcus Jones',
            thumb: 'profile-12.jpeg',
            title: 'Learn calligraphy',
            description: 'Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '11/17/2020',
            isFav: false,
            tag: '',
        },
        {
            id: 17,
            user: 'Matthew Gray',
            thumb: 'profile-24.jpeg',
            title: 'Have a photo session with some friends',
            description: 'Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '11/18/2020',
            isFav: false,
            tag: 'important',
        },
        {
            id: 18,
            user: 'Chad Davis',
            thumb: 'profile-31.jpeg',
            title: 'Go to the gym',
            description: 'Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '11/18/2020',
            isFav: false,
            tag: '',
        },
        {
            id: 19,
            user: 'Linda Drake',
            thumb: 'profile-23.jpeg',
            title: 'Make own LEGO creation',
            description: 'Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '11/18/2020',
            isFav: false,
            tag: 'social',
        },
        {
            id: 20,
            user: 'Kathleen Flores',
            thumb: 'profile-34.jpeg',
            title: 'Take cat on a walk',
            description: 'Baseball ipsum dolor sit amet cellar rubber win hack tossed. ',
            date: '11/18/2020',
            isFav: false,
            tag: 'personal',
        },
    ]);

    const defaultParams = { id: null, title: '', description: '', tag: '', user: '', thumb: '' };
    const [params, setParams] = useState(JSON.parse(JSON.stringify(defaultParams)));
    const [addContactModal, setAddContactModal] = useState(false);
    const [isDeleteNoteModal, setIsDeleteNoteModal] = useState(false);
    const [isShowNoteMenu, setIsShowNoteMenu] = useState(false);
    const [isViewNoteModal, setIsViewNoteModal] = useState(false);
    const [filterdNotesList, setFilterdNotesList] = useState([]);
    const [selectedTab, setSelectedTab] = useState('all');
    const [deletedNote, setDeletedNote] = useState(null);
    const [modal6, setModal6] = useState(false);
    const [date1, setDate1] = useState('Date of Birth');
    const [activeTab4, setActiveTab4] = useState(1);

    const searchNotes = () => {
        if (selectedTab !== 'fav') {
            if (selectedTab !== 'all' || selectedTab === 'delete') {
                setFilterdNotesList(notesList.filter((d) => d.tag === selectedTab));
            } else {
                setFilterdNotesList(notesList);
            }
        } else {
            setFilterdNotesList(notesList.filter((d) => d.isFav));
        }
    };

    const saveNote = () => {
        if (!params.title) {
            showMessage('Title is required.', 'error');
            return false;
        }
        if (params.id) {
            //update task
            let note = notesList.find((d) => d.id === params.id);
            note.title = params.title;
            note.user = params.user;
            note.description = params.description;
            note.tag = params.tag;
        } else {
            //add note
            let maxNoteId = notesList.reduce((max, character) => (character.id > max ? character.id : max), notesList[0].id);
            if (!maxNoteId) {
                maxNoteId = 0;
            }
            let dt = new Date();
            let note = {
                id: maxNoteId + 1,
                title: params.title,
                user: params.user,
                thumb: 'profile-21.jpeg',
                description: params.description,
                date: dt.getDate() + '/' + Number(dt.getMonth()) + 1 + '/' + dt.getFullYear(),
                isFav: false,
                tag: params.tag,
            };

            notesList.splice(0, 0, note);
            searchNotes();
        }
        showMessage('Note has been saved successfully.');
        setAddContactModal(false);
        searchNotes();
    };

    const tabChanged = (type) => {
        setSelectedTab(type);
        setIsShowNoteMenu(false);
        searchNotes();
    };

    const setFav = (note) => {
        let list = filterdNotesList;
        let item = list.find((d) => d.id === note.id);
        item.isFav = !item.isFav;

        setFilterdNotesList([...list]);
        if (selectedTab !== 'all' || selectedTab === 'delete') {
            searchNotes();
        }
    };

    const setTag = (note, name = '') => {
        let list = filterdNotesList;
        let item = filterdNotesList.find((d) => d.id === note.id);
        item.tag = name;
        setFilterdNotesList([...list]);
        if (selectedTab !== 'all' || selectedTab === 'delete') {
            searchNotes();
        }
    };

    const changeValue = (e) => {
        const { value, id } = e.target;
        setParams({ ...params, [id]: value });
    };

    const deleteNoteConfirm = (note) => {
        setDeletedNote(note);
        setIsDeleteNoteModal(true);
    };

    const deleteNote = () => {
        setNoteList(notesList.filter((d) => d.id !== deletedNote.id));
        searchNotes();
        showMessage('Student has been deleted successfully.');
        setIsDeleteNoteModal(false);
    };

    const showMessage = (msg = '', type = 'success') => {
        const toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            customClass: { container: 'toast' },
        });
        toast.fire({
            icon: type,
            title: msg,
            padding: '10px 20px',
        });
    };

    useEffect(() => {
        searchNotes();
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [selectedTab, notesList]);

    const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const branchesOptions = [
        { label: "SFK", value: "SFK", level: 1 },
        { label: "SFL", value: "SFL", level: 2 },
        { label: "SFI", value: "SFI", level: 3 },
        { label: "SFS", value: "SFS", level: 4 },
        { label: "SFH", value: "SFH", level: 5 },
        { label: "SFIR", value: "SFIR", level: 6 },
        { label: "SFC", value: "SFC", level: 7 },
    ];

    const dialingCodeOptions = [
        { label: "Afghanistan (+93)", level: 0 },
        { label: "Albania (+355)", level: 1 },
        { label: "Algeria (+213)", level: 2 },
        { label: "American Samoa (+1-684)", level: 3 },
        { label: "Andorra (+376)", level: 4 },
        { label: "Angola (+244)", level: 5 },
        { label: "Anguilla (+1-264)", level: 6 },
        { label: "Antarctica (+672)", level: 7 },
        { label: "Antigua and Barbuda (+1-268)", level: 8 },
        { label: "Argentina (+54)", level: 9 },
        { label: "Armenia (+374)", level: 10 },
        { label: "Aruba (+297)", level: 11 },
        { label: "Australia (+61)", level: 12 },
        { label: "Austria (+43)", level: 13 },
        { label: "Azerbaijan (+994)", level: 14 },
        { label: "Bahamas (+1-242)", level: 15 },
        { label: "Bahrain (+973)", level: 16 },
        { label: "Bangladesh (+880)", level: 17 },
        { label: "Barbados (+1-246)", level: 18 },
        { label: "Belarus (+375)", level: 19 },
        { label: "Belgium (+32)", level: 20 },
        { label: "Belize (+501)", level: 21 },
        { label: "Benin (+229)", level: 22 },
        { label: "Bermuda (+1-441)", level: 23 },
        { label: "Bhutan (+975)", level: 24 },
        { label: "Bolivia (+591)", level: 25 },
        { label: "Bosnia and Herzegovina (+387)", level: 26 },
        { label: "Botswana (+267)", level: 27 },
        { label: "Brazil (+55)", level: 28 },
        { label: "British Indian Ocean Territory (+246)", level: 29 },
        { label: "British Virgin Islands (+1-284)", level: 30 },
        { label: "Brunei (+673)", level: 31 },
        { label: "Bulgaria (+359)", level: 32 },
        { label: "Burkina Faso (+226)", level: 33 },
        { label: "Burundi (+257)", level: 34 },
        { label: "Cambodia (+855)", level: 35 },
        { label: "Cameroon (+237)", level: 36 },
        { label: "Canada (+1)", level: 37 },
        { label: "Cape Verde (+238)", level: 38 },
        { label: "Cayman Islands (+1-345)", level: 39 },
        { label: "Central African Republic (+236)", level: 40 },
        { label: "Chad (+235)", level: 41 },
        { label: "Chile (+56)", level: 42 },
        { label: "China (+86)", level: 43 },
        { label: "Christmas Island (+61)", level: 44 },
        { label: "Cocos Islands (+61)", level: 45 },
        { label: "Colombia (+57)", level: 46 },
        { label: "Comoros (+269)", level: 47 },
        { label: "Cook Islands (+682)", level: 48 },
        { label: "Costa Rica (+506)", level: 49 },
        { label: "Croatia (+385)", level: 50 },
        { label: "Cuba (+53)", level: 51 },
        { label: "Curacao (+599)", level: 52 },
        { label: "Cyprus (+357)", level: 53 },
        { label: "Czech Republic (+420)", level: 54 },
        { label: "Democratic Republic of the Congo (+243)", level: 55 },
        { label: "Denmark (+45)", level: 56 },
        { label: "Djibouti (+253)", level: 57 },
        { label: "Dominica (+1-767)", level: 58 },
        { label: "Dominican Republic (+1-809, +1-829, +1-849)", level: 59 },
        { label: "East Timor (+670)", level: 60 },
        { label: "Ecuador (+593)", level: 61 },
        { label: "Egypt (+20)", level: 62 },
        { label: "El Salvador (+503)", level: 63 },
        { label: "Equatorial Guinea (+240)", level: 64 },
        { label: "Eritrea (+291)", level: 65 },
        { label: "Estonia (+372)", level: 66 },
        { label: "Ethiopia (+251)", level: 67 },
        { label: "Falkland Islands (+500)", level: 68 },
        { label: "Faroe Islands (+298)", level: 69 },
        { label: "Fiji (+679)", level: 70 },
        { label: "Finland (+358)", level: 71 },
        { label: "France (+33)", level: 72 },
        { label: "French Guiana (+594)", level: 73 },
        { label: "French Polynesia (+689)", level: 74 },
        { label: "Gabon (+241)", level: 75 },
        { label: "Gambia (+220)", level: 76 },
        { label: "Georgia (+995)", level: 77 },
        { label: "Germany (+49)", level: 78 },
        { label: "Ghana (+233)", level: 79 },
        { label: "Gibraltar (+350)", level: 80 },
        { label: "Greece (+30)", level: 81 },
        { label: "Greenland (+299)", level: 82 },
        { label: "Grenada (+1-473)", level: 83 },
        { label: "Guadeloupe (+590)", level: 84 },
        { label: "Guam (+1-671)", level: 85 },
        { label: "Guatemala (+502)", level: 86 },
        { label: "Guernsey (+44-1481)", level: 87 },
        { label: "Guinea (+224)", level: 88 },
        { label: "Guinea-Bissau (+245)", level: 89 },
        { label: "Guyana (+592)", level: 90 },
        { label: "Haiti (+509)", level: 91 },
        { label: "Honduras (+504)", level: 92 },
        { label: "Hong Kong (+852)", level: 93 },
        { label: "Hungary (+36)", level: 94 },
        { label: "Iceland (+354)", level: 95 },
        { label: "India (+91)", level: 96 },
        { label: "Indonesia (+62)", level: 97 },
        { label: "Iran (+98)", level: 98 },
        { label: "Iraq (+964)", level: 99 },
        { label: "Ireland (+353)", level: 100 },
        { label: "Pakistan (+92)", level: 101 },
    ];

    const options4 = [
        { value: 'orange', label: 'Orange' },
        { value: 'white', label: 'White' },
        { value: 'purple', label: 'Purple' },
    ];

    return (
        <div>
            <div className="flex gap-5 relative sm:h-[calc(100vh_-_150px)] h-full">
                <div className={`bg-black/60 z-10 w-full h-full rounded-md absolute hidden ${isShowNoteMenu ? '!block xl:!hidden' : ''}`} onClick={() => setIsShowNoteMenu(!isShowNoteMenu)}></div>
                <div
                    className={`panel
                    p-4
                    flex-none
                    w-[240px]
                    absolute
                    xl:relative
                    z-10
                    space-y-4
                    h-full
                    xl:h-auto
                    hidden
                    xl:block
                    ltr:lg:rounded-r-md ltr:rounded-r-none
                    rtl:lg:rounded-l-md rtl:rounded-l-none
                    overflow-hidden ${isShowNoteMenu ? '!block h-full ltr:left-0 rtl:right-0' : 'hidden shadow'}`}
                >
                    <div className="flex flex-col h-full pb-16">
                        <div className="flex text-center items-center">
                            <div className="shrink-0">
                                <IconNotes />
                            </div>
                            <h3 className="text-lg font-semibold ltr:ml-3 rtl:mr-3">Students</h3>
                        </div>
                        <div className="h-px w-full border-b border-white-light dark:border-[#1b2e4b] my-4"></div>
                        <PerfectScrollbar className="relative ltr:pr-3.5 rtl:pl-3.5 ltr:-mr-3.5 rtl:-ml-3.5 h-full grow">
                            <div className="space-y-1">
                                <button
                                    type="button"
                                    className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 ${selectedTab === 'all' && 'bg-gray-100 dark:text-primary text-primary dark:bg-[#181F32]'
                                        }`}
                                    onClick={() => tabChanged('all')}
                                >
                                    <div className="flex items-center">
                                        <IconNotesEdit className="shrink-0" />
                                        <div className="ltr:ml-3 rtl:mr-3">All Students</div>
                                    </div>
                                </button>
                                <button
                                    type="button"
                                    className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 ${selectedTab === 'fav' && 'bg-gray-100 dark:text-primary text-primary dark:bg-[#181F32]'
                                        }`}
                                    onClick={() => tabChanged('fav')}
                                >
                                    <div className="flex items-center">
                                        <IconStar className="shrink-0" />
                                        <div className="ltr:ml-3 rtl:mr-3">Favourites</div>
                                    </div>
                                </button>
                                <div className="h-px w-full border-b border-white-light dark:border-[#1b2e4b]"></div>
                                <div className="px-1 py-3 text-white-dark">Status</div>
                                <button
                                    type="button"
                                    className={`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-primary ltr:hover:pl-3 rtl:hover:pr-3 duration-300 ${selectedTab === 'personal' && 'ltr:pl-3 rtl:pr-3 bg-gray-100 dark:bg-[#181F32]'
                                        }`}
                                    onClick={() => tabChanged('personal')}
                                >
                                    <IconSquareRotated className="fill-primary shrink-0" />
                                    <div className="ltr:ml-3 rtl:mr-3">In Process</div>
                                </button>
                                <button
                                    type="button"
                                    className={`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-warning ltr:hover:pl-3 rtl:hover:pr-3 duration-300 ${selectedTab === 'work' && 'ltr:pl-3 rtl:pr-3 bg-gray-100 dark:bg-[#181F32]'
                                        }`}
                                    onClick={() => tabChanged('work')}
                                >
                                    <IconSquareRotated className="fill-warning shrink-0" />
                                    <div className="ltr:ml-3 rtl:mr-3">Closed</div>
                                </button>
                                <button
                                    type="button"
                                    className={`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-info ltr:hover:pl-3 rtl:hover:pr-3 duration-300 ${selectedTab === 'social' && 'ltr:pl-3 rtl:pr-3 bg-gray-100 dark:bg-[#181F32]'
                                        }`}
                                    onClick={() => tabChanged('social')}
                                >
                                    <IconSquareRotated className="fill-info shrink-0" />
                                    <div className="ltr:ml-3 rtl:mr-3">Moved To Processing</div>
                                </button>
                                <div className="h-px w-full border-b border-white-light dark:border-[#1b2e4b]"></div>
                                <div className="px-1 py-3 text-white-dark">Filters</div>
                                <div className="mb-4">
                                    <div className=" text-white-dark mb-1">Students</div>
                                    <Select placeholder="Filter By Name" options={options4} />
                                </div>
                                <div className="pt-4">
                                    <div className=" text-white-dark mb-1">Registration ID</div>
                                    <Select placeholder="Filter By Id" options={options4} />
                                </div>
                                <div className="pt-4">
                                    <div className=" text-white-dark mb-1">Counsellors</div>
                                    <Select placeholder="Filter By Counsellor" options={options4} />
                                </div>
                                <div className="pt-4">
                                    <div className=" text-white-dark mb-1">Branch</div>
                                    <Select placeholder="Filter By Branch" options={branchesOptions} />
                                </div>
                            </div>
                        </PerfectScrollbar>
                    </div>
                    <div className="ltr:left-0 rtl:right-0 absolute bottom-0 p-4 w-full">
                        <button className="btn btn-primary w-full" type="button" onClick={() => setModal6(true)}>
                            <IconPlus className="w-5 h-5 ltr:mr-2 rtl:ml-2 shrink-0" />
                            Add New Student
                        </button>
                    </div>
                </div>
                <div className="panel flex-1 overflow-auto h-full">
                    <div className="pb-5">
                        <button type="button" className="xl:hidden hover:text-primary" onClick={() => setIsShowNoteMenu(!isShowNoteMenu)}>
                            <IconMenu />
                        </button>
                    </div>
                    {filterdNotesList?.length ? (
                        <div className="sm:min-h-[300px] min-h-[400px]">
                            <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                                {filterdNotesList.map((note) => {
                                    return (
                                        <div
                                            className={`panel pb-12 ${note.tag === 'personal'
                                                ? 'bg-primary-light shadow-primary'
                                                : note.tag === 'work'
                                                    ? 'bg-warning-light shadow-warning'
                                                    : note.tag === 'social'
                                                        ? 'bg-info-light shadow-info'
                                                        : note.tag === 'important'
                                                            ? 'bg-danger-light shadow-danger'
                                                            : 'dark:shadow-dark'
                                                }`}
                                            key={note.id}
                                        >
                                            <div className="min-h-[142px]">
                                                <div className="flex justify-between">
                                                    <div className="flex items-center w-max">
                                                        <div className="flex-none">
                                                            {note.thumb && (
                                                                <div className="p-0.5 bg-gray-300 dark:bg-gray-700 rounded-full">
                                                                    <img className="h-8 w-8 rounded-full object-cover" alt="img" src={`/assets/images/${note.thumb}`} />
                                                                </div>
                                                            )}

                                                            {!note.thumb && note.user && (
                                                                <div className="grid place-content-center h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-700 text-sm font-semibold">
                                                                    {note.user.charAt(0) + '' + note.user.charAt(note.user.indexOf('') + 1)}
                                                                </div>
                                                            )}
                                                            {!note.thumb && !note.user && (
                                                                <div className="bg-gray-300 dark:bg-gray-700 rounded-full p-2">
                                                                    <IconUser className="w-4.5 h-4.5" />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="ltr:ml-2 rtl:mr-2">
                                                            <div className="font-semibold">{note.user}</div>
                                                            <div className="text-sx text-white-dark">00024-24-0624</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex flex-row justify-between mt-5'>
                                                        <h4 className="font-semibold ">Counsellor</h4>
                                                        <div className="flex items-center w-max justify-center -space-x-2">
                                                            <Tippy content={note.user}>
                                                                <img className="h-7 w-7 rounded-full object-cover" alt="img" src={`/assets/images/${note.thumb}`} />
                                                            </Tippy>
                                                            <Tippy content={note.user}>
                                                                <img className="h-7 w-7 rounded-full object-cover" alt="img" src={`/assets/images/${note.thumb}`} />
                                                            </Tippy>

                                                        </div>
                                                    </div>
                                                    <div className='flex flex-row justify-between mt-3'>
                                                        <h4 className="font-semibold ">Branch</h4>
                                                        <p className="text-white-dark">SFL</p>
                                                    </div>
                                                    <div className='flex flex-row justify-between mt-3'>
                                                        <h4 className="font-semibold ">App Officer</h4>
                                                        <p className="text-white-dark">New User</p>
                                                    </div>
                                                    <div className='flex flex-row justify-between mt-3 mb-3'>
                                                        <h4 className="font-semibold ">Applications</h4>
                                                        <p className="text-white-dark">10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-5 left-0 w-full px-5">
                                                <div className="flex items-center justify-between mt-2">
                                                    <div className="dropdown fdfdf">
                                                        <Dropdown
                                                            offset={[0, 5]}
                                                            placement={`${isRtl ? 'bottom-end' : 'bottom-start'}`}
                                                            btnClassName={`${note.tag === 'personal'
                                                                ? 'text-primary'
                                                                : note.tag === 'work'
                                                                    ? 'text-warning'
                                                                    : note.tag === 'social'
                                                                        ? 'text-info'
                                                                        : note.tag === 'important'
                                                                            ? 'text-danger'
                                                                            : ''
                                                                }`}
                                                            button={
                                                                <span>
                                                                    <IconSquareRotated
                                                                        className={
                                                                            note.tag === 'personal'
                                                                                ? 'fill-primary'
                                                                                : note.tag === 'work'
                                                                                    ? 'fill-warning'
                                                                                    : note.tag === 'social'
                                                                                        ? 'fill-info'
                                                                                        : note.tag === 'important'
                                                                                            ? 'fill-danger'
                                                                                            : ''
                                                                        }
                                                                    />
                                                                </span>
                                                            }
                                                        >
                                                            <ul className="text-sm font-medium">
                                                                <li>
                                                                    <button type="button" onClick={() => setTag(note, 'personal')}>
                                                                        <IconSquareRotated className="ltr:mr-2 rtl:ml-2 fill-primary text-primary" />
                                                                        In Process
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button type="button" onClick={() => setTag(note, 'work')}>
                                                                        <IconSquareRotated className="ltr:mr-2 rtl:ml-2 fill-warning text-warning" />
                                                                        Closed
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </Dropdown>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <button type="button" className="text-danger" onClick={() => deleteNoteConfirm(note)}>
                                                            <IconTrashLines />
                                                        </button>
                                                        <button type="button" className="text-warning group ltr:ml-2 rtl:mr-2" onClick={() => setFav(note)}>
                                                            <IconStar className={`w-4.5 h-4.5 group-hover:fill-warning ${note.isFav && 'fill-warning'}`} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center sm:min-h-[300px] min-h-[400px] font-semibold text-lg h-full">No data available</div>
                    )}

                    {/* Student Delete Modal */}
                    <Transition appear show={isDeleteNoteModal} as={Fragment}>
                        <Dialog as="div" open={isDeleteNoteModal} onClose={() => setIsDeleteNoteModal(false)}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0" />
                            </Transition.Child>
                            <div id="fadein_up_modal" className="fixed inset-0 z-[999] bg-[black]/60 flex items-center justify-center px-4">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel
                                        as="div"
                                        className={`panel  w-full max-w-lg rounded-lg border-0 p-0 text-black dark:text-white-dark animate__animated ${isRtl ? 'animate__fadeInRight' : 'animate__fadeInLeft'
                                            } relative flex flex-col overflow-hidden`}
                                    >
                                        <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Delete Student</div>
                                        <div className="p-5 text-center">
                                            <div className="text-white bg-danger ring-4 ring-danger/30 p-4 rounded-full w-fit mx-auto">
                                                <IconTrashLines className="w-7 h-7 mx-auto" />
                                            </div>
                                            <div className="sm:w-3/4 mx-auto mt-5">Are you sure you want to delete Notes?</div>

                                            <div className="flex justify-center items-center mt-8">
                                                <button type="button" className="btn btn-outline-danger" onClick={() => setIsDeleteNoteModal(false)}>
                                                    Cancel
                                                </button>
                                                <button type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4" onClick={deleteNote}>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition>

                    {/* Student Create Modal */}
                    <Transition appear show={modal6} as={Fragment}>
                        <Dialog as="div" open={modal6} onClose={() => setModal6(false)}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0" />
                            </Transition.Child>
                            <div id="fadein_up_modal" className="fixed inset-0 z-[999] bg-[black]/60 flex items-center justify-center px-4">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel
                                        as="div"
                                        className={`panel w-full h-[75vh] max-w-5xl rounded-lg border-0 p-0 text-black dark:text-white-dark animate__animated ${isRtl ? 'animate__fadeInRight' : 'animate__fadeInLeft'
                                            } relative flex flex-col overflow-hidden`}
                                    >
                                        <div className="flex-grow overflow-y-auto px-6 pt-3">
                                            <RegistrationForm
                                                branchesOptions={branchesOptions}
                                                dialingCodeOptions={dialingCodeOptions}
                                                date1={date1}
                                                setDate1={setDate1}
                                                isRtl={isRtl}
                                                activeTab4={activeTab4}
                                                setActiveTab4={setActiveTab4}
                                            />
                                        </div>
                                        <div className="sticky bottom-0 left-0 w-full z-10 bg-white dark:bg-gray-800 px-6">
                                            <div className="flex justify-end gap-2 py-3">
                                                <button
                                                    type="button"
                                                    className={`btn btn-primary ${activeTab4 === 1 ? 'hidden' : ''}`}
                                                    onClick={() => setActiveTab4((prevTab) => (prevTab > 1 ? prevTab - 1 : 1))}
                                                >
                                                    Back
                                                </button>
                                                <button
                                                    type="button"
                                                    className={`btn btn-primary`}
                                                    onClick={() => setActiveTab4((prevTab) => (prevTab < 11 ? prevTab + 1 : 11))}
                                                >
                                                    Next
                                                </button>
                                                <button
                                                    onClick={() => setModal6(false)}
                                                    type="button"
                                                    className="btn btn-outline-danger"
                                                >
                                                    Discard
                                                </button>
                                            </div>

                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition>
                </div>
            </div>
        </div>
    );
};

export default Notes;
