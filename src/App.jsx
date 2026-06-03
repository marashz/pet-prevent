App_PetPrevent_6_2_FINAL

// CODIGO CORREGIDO 6.2 - LOGO MAS GRANDE, CALENDARIOS REALMENTE ALINEADOS Y FOTOS EDITABLES
import { useState } from 'react'
import logo from './assets/logo-icon.png'
 
import {
  FaHome,
  FaPaw,
  FaCalendarAlt,
  FaSyringe,
  FaComments,
  FaBell,
  FaShieldAlt,
  FaQuestionCircle,
  FaCog,
  FaUsers,
  FaTrash,
  FaCheck,
  FaCamera,
  FaStethoscope,
  FaClipboardList,
  FaCreditCard,
  FaChevronDown,
  FaBars,
} from 'react-icons/fa'
 
const dogImage =
  'https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-09golden20retriever.jpg?itok=48StbVfe'
 
const catImage =
  'https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-06Persian20Long20Hair.2.jpg?itok=qzNV_HuV'
 
const heroImage =
  'https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-dog-and-cat-png-image_15491148.png'
 
const clientProfileImage =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80'
 
const vetProfileImage =
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=256&q=80'
 
export default function App() {
  const membershipPlans = [
    {
      name: 'Pet Prevent Basic',
      pets: '1 a 2 mascotas',
      price: '$299 MXN / mes',
      benefits: [
        'Calendario preventivo personalizado',
        'Recordatorios de vacunas y desparasitación',
        'Consultas veterinarias preventivas',
        'Seguimiento médico por mascota',
        '10% en estudios, procedimientos y cirugías',
      ],
    },
    {
      name: 'Pet Prevent Plus',
      pets: '3 a 5 mascotas',
      price: '$549 MXN / mes',
      benefits: [
        'Calendario preventivo personalizado',
        'Recordatorios de vacunas y desparasitación',
        'Consultas veterinarias preventivas',
        'Seguimiento médico por mascota',
        '15% en estudios, procedimientos y cirugías',
      ],
    },
    {
      name: 'Pet Prevent Elite',
      pets: '6 a 10 mascotas',
      price: '$899 MXN / mes',
      benefits: [
        'Calendario preventivo personalizado',
        'Recordatorios de vacunas y desparasitación',
        'Consultas veterinarias preventivas',
        'Seguimiento médico por mascota',
        '20% en estudios, procedimientos y cirugías',
      ],
    },
  ]
 
  const [page, setPage] = useState('Dashboard')
  const [role, setRole] = useState('Cliente')
  const [showAccess, setShowAccess] = useState(false)
  const [selectedRole, setSelectedRole] = useState('')
  const [accessCode, setAccessCode] = useState('')
  const [activePlan, setActivePlan] = useState(membershipPlans[1])
  const [pendingPlan, setPendingPlan] = useState(membershipPlans[1])
  const [selectedClient, setSelectedClient] = useState(null)
  const [mobileMenu, setMobileMenu] = useState(false)
 
  const [userName, setUserName] = useState('Mariana Sánchez')
  const [userEmail, setUserEmail] = useState('mariana@email.com')
  const [userPhone, setUserPhone] = useState('+52 33 9876 5432')
  const [notifications, setNotifications] = useState(true)
  const [contactPreference, setContactPreference] = useState('WhatsApp')
 
  const [vetName, setVetName] = useState('Dra. Fernanda López')
  const [vetSpecialty, setVetSpecialty] = useState('Medicina preventiva')
  const [vetPhone, setVetPhone] = useState('+52 33 1234 5678')
  const [vetEmail, setVetEmail] = useState('veterinaria@email.com')
  const [clientPhoto, setClientPhoto] = useState(clientProfileImage)
  const [vetPhoto, setVetPhoto] = useState(vetProfileImage)
 
  const [message, setMessage] = useState('')
  const [reply, setReply] = useState('')
  const [openFaq, setOpenFaq] = useState(null)
  const [editingPetIndex, setEditingPetIndex] = useState(null)
 
  const [paymentData, setPaymentData] = useState({
    cardName: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
    clinic: 'Clínica Veterinaria Pet Prevent',
    observations: '',
  })
 
  const [pets, setPets] = useState([
    {
      name: 'Max',
      breed: 'Perro Golden Retriever',
      age: '4 años',
      image: dogImage,
      status: 'Seguimiento preventivo',
      calendarColor: '#22B14C',
      calendarEvents: [
        { day: 10, text: 'Vacuna Rabia', hour: '10:00 AM', done: false },
        { day: 20, text: 'Consulta General', hour: '09:30 AM', done: false },
        { day: 28, text: 'Revisión preventiva', hour: '12:00 PM', done: false },
      ],
      vaccines: [
        { name: 'Rabia', status: 'Próxima aplicación en Junio 2026', applied: false },
        { name: 'Polivalente', status: 'Aplicada en Enero 2026', applied: true },
        { name: 'Refuerzo anual', status: 'Próxima aplicación en Enero 2027', applied: false },
      ],
    },
    {
      name: 'Luna',
      breed: 'Gato Persa',
      age: '2 años',
      image: catImage,
      status: 'Seguimiento preventivo',
      calendarColor: '#0B64D8',
      calendarEvents: [
        { day: 15, text: 'Desparasitación', hour: '11:00 AM', done: false },
        { day: 22, text: 'Revisión dental', hour: '10:30 AM', done: false },
        { day: 30, text: 'Control preventivo', hour: '05:00 PM', done: false },
      ],
      vaccines: [
        { name: 'Triple felina', status: 'Aplicada en Marzo 2026', applied: true },
        { name: 'Rabia felina', status: 'Próxima revisión en Agosto 2026', applied: false },
        { name: 'Leucemia felina', status: 'Próxima aplicación en Noviembre 2026', applied: false },
      ],
    },
  ])
 
  const [clients] = useState([
    {
      name: 'Mariana Sánchez',
      phone: '+52 33 9876 5432',
      email: 'mariana@email.com',
      pets: 'Max, Luna',
      plan: 'Pet Prevent Plus',
    },
    {
      name: 'Carlos Ramírez',
      phone: '+52 33 5555 2211',
      email: 'carlos@email.com',
      pets: 'Rocky',
      plan: 'Pet Prevent Basic',
    },
  ])
 
  const [consultas, setConsultas] = useState([
    {
      client: 'Mariana Sánchez',
      pet: 'Max',
      date: '12 Junio 2026',
      text: 'Quiero saber si Max necesita ayuno antes de su próxima revisión.',
      answer: '',
    },
  ])
 
  const [newEvent, setNewEvent] = useState({ petIndex: 0, day: '', text: '', hour: '' })
  const [newVaccine, setNewVaccine] = useState({ petIndex: 0, name: '', status: '' })
 
  const notificationItems = notifications
    ? [
        'Vacuna Rabia de Max próxima - Día 10',
        'Desparasitación de Luna próxima - Día 15',
        'Consulta pendiente de seguimiento',
      ]
    : []
 
  const notificationCount = notificationItems.length
 
  function getCurrentClientPlan(client) {
    return client.name === 'Mariana Sánchez' ? activePlan.name : client.plan
  }
 
  function goTo(nextPage) {
    setPage(nextPage)
    setMobileMenu(false)
  }
 
  function openAccess(type) {
    setSelectedRole(type)
    setAccessCode('')
    setShowAccess(true)
  }
 
  function confirmAccess() {
    const validClientCode = 'CL-2045'
    const validVetCode = 'MVZ-8821'
 
    if (selectedRole === 'Cliente' && accessCode !== validClientCode) {
      return alert('Número de cliente inválido')
    }
 
    if (selectedRole === 'Veterinario' && accessCode !== validVetCode) {
      return alert('Número de médico veterinario inválido')
    }
 
    setRole(selectedRole)
    setPage('Dashboard')
    setShowAccess(false)
    setAccessCode('')
  }
 
  function addPet() {
    if (role !== 'Veterinario') return alert('Solo el veterinario puede agregar mascotas')
 
    setPets([
      ...pets,
      {
        name: '',
        breed: '',
        age: '',
        image: '',
        status: 'Registro preventivo',
        calendarColor: '#22B14C',
        calendarEvents: [],
        vaccines: [],
      },
    ])
 
    setEditingPetIndex(pets.length)
  }
 
  function updatePet(index, field, value) {
    const copy = [...pets]
    copy[index][field] = value
    setPets(copy)
  }
 
  function deletePet(index) {
    if (role !== 'Veterinario') return alert('Solo el veterinario puede eliminar mascotas')
 
    const copy = [...pets]
    copy.splice(index, 1)
    setPets(copy)
    setEditingPetIndex(null)
  }
 
  function readImageFile(file, callback) {
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => callback(event.target.result)
    reader.readAsDataURL(file)
  }
 
  function updateProfilePhoto(file) {
    readImageFile(file, (image) => {
      if (role === 'Veterinario') {
        setVetPhoto(image)
      } else {
        setClientPhoto(image)
      }
    })
  }
 
  function updatePetImage(index, file) {
    readImageFile(file, (image) => updatePet(index, 'image', image))
  }
 
  function addEvent() {
    if (role !== 'Veterinario') return alert('Solo el veterinario puede agregar eventos')
    if (!newEvent.day || !newEvent.text.trim()) return alert('Agrega día y nombre del evento')
 
    const copy = [...pets]
    copy[newEvent.petIndex].calendarEvents.push({
      day: Number(newEvent.day),
      text: newEvent.text,
      hour: newEvent.hour || 'Pendiente',
      done: false,
    })
 
    setPets(copy)
    setNewEvent({ petIndex: 0, day: '', text: '', hour: '' })
  }
 
  function markEventDone(petIndex, eventIndex) {
    const copy = [...pets]
    copy[petIndex].calendarEvents[eventIndex].done = !copy[petIndex].calendarEvents[eventIndex].done
    setPets(copy)
  }
 
  function deleteEvent(petIndex, eventIndex) {
    const copy = [...pets]
    copy[petIndex].calendarEvents.splice(eventIndex, 1)
    setPets(copy)
  }
 
  function addVaccine() {
    if (role !== 'Veterinario') return alert('Solo el veterinario puede agregar vacunas')
    if (!newVaccine.name.trim() || !newVaccine.status.trim()) {
      return alert('Completa el nombre y estado de la vacuna')
    }
 
    const copy = [...pets]
    copy[newVaccine.petIndex].vaccines.push({
      name: newVaccine.name,
      status: newVaccine.status,
      applied: false,
    })
 
    setPets(copy)
    setNewVaccine({ petIndex: 0, name: '', status: '' })
  }
 
  function markVaccineApplied(petIndex, vaccineIndex) {
    const copy = [...pets]
    copy[petIndex].vaccines[vaccineIndex].applied = true
    copy[petIndex].vaccines[vaccineIndex].status = 'Aplicada en 2026'
    setPets(copy)
  }
 
  function deleteVaccine(petIndex, vaccineIndex) {
    const copy = [...pets]
    copy[petIndex].vaccines.splice(vaccineIndex, 1)
    setPets(copy)
  }
 
  function sendMessage() {
    if (!message.trim()) return alert('Escribe una consulta primero')
 
    setConsultas([
      ...consultas,
      {
        client: userName,
        pet: 'Max',
        date: new Date().toLocaleDateString('es-MX', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
        text: message,
        answer: '',
      },
    ])
 
    setMessage('')
    alert('Consulta enviada correctamente')
  }
 
  function answerConsulta(index) {
    if (!reply.trim()) return alert('Escribe una respuesta')
    const copy = [...consultas]
    copy[index].answer = reply
    setConsultas(copy)
    setReply('')
  }
 
  function startPlanChange(plan) {
    setPendingPlan(plan)
    setPaymentData({
      cardName: '',
      cardNumber: '',
      expiration: '',
      cvv: '',
      clinic: 'Clínica Veterinaria Pet Prevent',
      observations: '',
    })
    setPage('NuevaSuscripcion')
  }
 
  function confirmSubscription() {
    if (!paymentData.cardName || !paymentData.cardNumber || !paymentData.expiration || !paymentData.cvv) {
      return alert('Completa los datos de la tarjeta antes de pagar')
    }
 
    setActivePlan(pendingPlan)
    alert(`Pago registrado y ${pendingPlan.name} activado correctamente`)
    setPage('Plan')
  }
 
  return (
    <div className="min-h-screen bg-[#F4F8FC] text-[#071B4D] font-sans overflow-x-hidden">
      <style>{`
        .shadow-soft { box-shadow: 0 10px 28px rgba(7, 27, 77, 0.09); }
        .input { width: 100%; background: #F4F8FC; border-radius: 0.95rem; padding: 0.85rem 1rem; outline: none; color: #071B4D; }
        .btn-primary { display: inline-flex; align-items: center; justify-content: center; gap: 0.65rem; background: #22B14C; color: white; padding: 0.75rem 1.25rem; border-radius: 0.95rem; font-weight: 900; box-shadow: 0 8px 18px rgba(34,177,76,0.22); }
        .btn-secondary { display: inline-flex; align-items: center; justify-content: center; gap: 0.65rem; background: #073B88; color: white; padding: 0.75rem 1.25rem; border-radius: 0.95rem; font-weight: 900; box-shadow: 0 8px 18px rgba(7,59,136,0.18); }
        .soft-row { background: white; border-radius: 1rem; padding: 1rem; color: #475569; }
        .calendar-grid { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); column-gap: 0; row-gap: 0.45rem; width: 100%; }
        .calendar-head, .calendar-cell { width: 100%; display: flex; align-items: center; justify-content: center; text-align: center; }
        .calendar-head { height: 2rem; font-weight: 900; color: #073B88; }
        .calendar-dot { width: 2rem; height: 2rem; border-radius: 9999px; display: flex; align-items: center; justify-content: center; line-height: 1; font-weight: 800; }
      `}</style>
 
      {showAccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 sm:p-8 rounded-[28px] w-full max-w-[430px] shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-[#073B88] mb-3">Acceso {selectedRole}</h2>
            <p className="text-slate-500 mb-6 text-lg">
              Ingresa tu número de {selectedRole === 'Cliente' ? 'cliente' : 'médico veterinario'}
            </p>
            <input
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              placeholder={selectedRole === 'Cliente' ? 'Ej. CL-2045' : 'Ej. MVZ-8821'}
              className="input mb-5"
            />
            <button onClick={confirmAccess} className="w-full bg-[#22B14C] text-white py-4 rounded-2xl font-black text-lg shadow-lg">
              Continuar
            </button>
            <button onClick={() => setShowAccess(false)} className="w-full mt-3 text-slate-500 font-bold">
              Cancelar
            </button>
          </div>
        </div>
      )}
 
      <div className="lg:flex min-h-screen">
        <Sidebar
          page={page}
          role={role}
          goTo={goTo}
          openAccess={openAccess}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
 
        <main className="flex-1 w-full max-w-[1500px] mx-auto p-4 sm:p-5 xl:p-5 2xl:p-6 pb-28 lg:pb-6">
          <MobileTopBar
            role={role}
            userName={userName}
            notificationCount={notificationCount}
            goTo={goTo}
            setMobileMenu={setMobileMenu}
            clientPhoto={clientPhoto}
            vetPhoto={vetPhoto}
            updateProfilePhoto={updateProfilePhoto}
          />
 
          <Header
            role={role}
            userName={userName}
            notificationCount={notificationCount}
            goTo={goTo}
            clientPhoto={clientPhoto}
            vetPhoto={vetPhoto}
            updateProfilePhoto={updateProfilePhoto}
          />
 
          {page === 'Dashboard' && role === 'Cliente' && (
            <>
              <section className="grid grid-cols-2 xl:grid-cols-4 gap-3.5 xl:gap-4 mb-5">
                <Stat icon={<FaPaw />} title="Mascotas" value={pets.length} text="Registradas" color="blue" />
                <Stat icon={<FaSyringe />} title="Vacunas" value="5" text="Pendientes" color="green" />
                <Stat icon={<FaCalendarAlt />} title="Citas" value="3" text="Próximas" color="blue" />
                <Stat icon={<FaStethoscope />} title="Consultas" value={consultas.length} text="Pendientes" color="green" />
              </section>
 
              <section className="grid grid-cols-1 2xl:grid-cols-[minmax(0,1fr)_390px] gap-4 xl:gap-5 items-start">
                <div className="space-y-5">
                  <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.03fr] gap-4 xl:gap-5 items-start">
                    <PetSection pets={pets} role={role} addPet={addPet} goTo={goTo} updatePetImage={updatePetImage} />
                    <HeroBanner goTo={goTo} />
                  </div>
                  <QuickSection goTo={goTo} role={role} />
                </div>
 
                <DashboardSide pets={pets} goTo={goTo} />
              </section>
            </>
          )}
 
          {page === 'Dashboard' && role === 'Veterinario' && (
            <>
              <section className="grid grid-cols-2 xl:grid-cols-4 gap-3.5 xl:gap-4 mb-5">
                <Stat icon={<FaUsers />} title="Clientes" value={clients.length} text="Registrados" color="blue" />
                <Stat icon={<FaPaw />} title="Mascotas" value={pets.length} text="En seguimiento" color="green" />
                <Stat icon={<FaCalendarAlt />} title="Eventos" value="6" text="Programados" color="blue" />
                <Stat icon={<FaComments />} title="Consultas" value={consultas.length} text="Pendientes" color="green" />
              </section>
 
              <section className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-4 xl:gap-5">
                <div className="space-y-5">
                  <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#073B88] to-[#046B8F] text-white p-6 sm:p-7 min-h-[300px] shadow-soft">
                    <div className="relative z-10 max-w-[560px]">
                      <p className="text-white/75 font-bold">Panel veterinario</p>
                      <h2 className="text-4xl sm:text-5xl font-black mt-3 leading-tight">Gestión médica preventiva</h2>
                      <p className="mt-5 text-lg text-white/90 leading-relaxed">
                        Administra clientes, mascotas, consultas, vacunas y calendarios preventivos desde un solo lugar.
                      </p>
                      <button onClick={() => goTo('Clientes')} className="mt-8 bg-white text-[#073B88] px-7 py-4 rounded-2xl font-black shadow-lg">
                        Ver clientes →
                      </button>
                    </div>
                    <div className="absolute right-[-25px] bottom-[-20px] opacity-10 text-[260px]">🩺</div>
                  </div>
                  <QuickSection goTo={goTo} role={role} />
                </div>
                <InfoCard
                  title="Actividad reciente"
                  items={[
                    'Max - Vacuna Rabia - Día 10',
                    'Luna - Desparasitación - Día 15',
                    'Consulta nueva - Mariana Sánchez',
                  ]}
                />
              </section>
            </>
          )}
 
          {page === 'Mascotas' && (
            <>
              <PageTitle title="Mascotas" />
              <section className="space-y-6">
                {pets.map((pet, index) => (
                  <MainCard key={index} title={`Perfil de ${pet.name || 'Nueva mascota'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 lg:gap-8">
                      <div className="space-y-3">
                        <div className="bg-[#F4F8FC] rounded-[28px] p-4 flex items-center justify-center overflow-hidden">
                          {pet.image ? (
                            <img src={pet.image} alt={pet.name || 'Mascota'} className="w-full h-[220px] object-contain" />
                          ) : (
                            <div className="w-full h-[220px] flex flex-col items-center justify-center text-[#073B88]">
                              <FaCamera className="text-6xl mb-4" />
                              <p className="font-black">Agregar foto</p>
                            </div>
                          )}
                        </div>
 
                        <label className="w-full bg-white border-2 border-dashed border-[#22B14C] text-[#073B88] px-4 py-3 rounded-2xl font-black flex items-center justify-center gap-2 cursor-pointer hover:bg-[#F4F8FC] transition">
                          <FaCamera /> Cambiar foto de mascota
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => updatePetImage(index, e.target.files?.[0])}
                            className="hidden"
                          />
                        </label>
                      </div>
 
                      <div>
                        {editingPetIndex === index && role === 'Veterinario' ? (
                          <div className="space-y-4">
                            <Field label="Nombre de la mascota">
                              <input value={pet.name} onChange={(e) => updatePet(index, 'name', e.target.value)} placeholder="Nombre" className="input" />
                            </Field>
                            <Field label="Raza">
                              <input value={pet.breed} onChange={(e) => updatePet(index, 'breed', e.target.value)} placeholder="Raza" className="input" />
                            </Field>
                            <Field label="Edad">
                              <input value={pet.age} onChange={(e) => updatePet(index, 'age', e.target.value)} placeholder="Edad" className="input" />
                            </Field>
                            <Field label="Estado preventivo">
                              <input value={pet.status} onChange={(e) => updatePet(index, 'status', e.target.value)} className="input" />
                            </Field>
 
                            <div className="flex flex-col sm:flex-row gap-3">
                              <button onClick={() => setEditingPetIndex(null)} className="btn-primary">Guardar cambios</button>
                              <button onClick={() => deletePet(index)} className="bg-red-500 text-white px-6 py-3 rounded-2xl font-black shadow-lg">Eliminar mascota</button>
                            </div>
                          </div>
                        ) : (
                          <>
                            <h2 className="text-2xl sm:text-3xl font-black text-[#073B88]">{pet.name || 'Mascota sin nombre'}</h2>
                            <div className="mt-5 space-y-4 text-lg text-slate-600">
                              <div className="soft-row">Raza: {pet.breed || 'Pendiente'}</div>
                              <div className="soft-row">Edad: {pet.age || 'Pendiente'}</div>
                              <div className="soft-row">Estado preventivo: {pet.status}</div>
                            </div>
                            {role === 'Veterinario' && (
                              <button onClick={() => setEditingPetIndex(index)} className="mt-6 btn-primary">Editar perfil</button>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </MainCard>
                ))}
 
                {role === 'Veterinario' && (
                  <button onClick={addPet} className="btn-primary">Agregar nueva mascota</button>
                )}
              </section>
            </>
          )}
 
          {page === 'Calendario' && (
            <>
              <PageTitle title="Calendario Preventivo" />
              <section className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-4 xl:gap-5">
                <MainCard title="Calendario por mascota">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                    {pets.map((pet, petIndex) => (
                      <PetCalendar key={petIndex} pet={pet} petIndex={petIndex} role={role} onDone={markEventDone} onDelete={deleteEvent} />
                    ))}
                  </div>
 
                  {role === 'Veterinario' && (
                    <div className="mt-8 bg-[#F4F8FC] rounded-[28px] p-6">
                      <h3 className="text-2xl font-black text-[#073B88] mb-5">Agregar evento preventivo</h3>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <select value={newEvent.petIndex} onChange={(e) => setNewEvent({ ...newEvent, petIndex: Number(e.target.value) })} className="input bg-white">
                          {pets.map((pet, index) => <option key={index} value={index}>{pet.name || 'Mascota sin nombre'}</option>)}
                        </select>
                        <input type="number" value={newEvent.day} onChange={(e) => setNewEvent({ ...newEvent, day: e.target.value })} placeholder="Día" className="input bg-white" />
                        <input value={newEvent.text} onChange={(e) => setNewEvent({ ...newEvent, text: e.target.value })} placeholder="Evento" className="input bg-white" />
                        <input value={newEvent.hour} onChange={(e) => setNewEvent({ ...newEvent, hour: e.target.value })} placeholder="Hora" className="input bg-white" />
                      </div>
                      <button onClick={addEvent} className="mt-5 btn-primary">Agregar evento</button>
                    </div>
                  )}
                </MainCard>
 
                <DashboardSide pets={pets} goTo={goTo} compact />
              </section>
            </>
          )}
 
          {page === 'Vacunas' && (
            <>
              <PageTitle title="Vacunas" />
              <section className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-4 xl:gap-5">
                <MainCard title="Esquema de vacunación por mascota">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                    {pets.map((pet, petIndex) => (
                      <VaccineCard key={petIndex} pet={pet} petIndex={petIndex} role={role} onApply={markVaccineApplied} onDelete={deleteVaccine} />
                    ))}
                  </div>
 
                  {role === 'Veterinario' && (
                    <div className="mt-8 bg-[#F4F8FC] rounded-[28px] p-6">
                      <h3 className="text-2xl font-black text-[#073B88] mb-5">Agregar vacuna</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <select value={newVaccine.petIndex} onChange={(e) => setNewVaccine({ ...newVaccine, petIndex: Number(e.target.value) })} className="input bg-white">
                          {pets.map((pet, index) => <option key={index} value={index}>{pet.name || 'Mascota sin nombre'}</option>)}
                        </select>
                        <input value={newVaccine.name} onChange={(e) => setNewVaccine({ ...newVaccine, name: e.target.value })} placeholder="Nombre de la vacuna" className="input bg-white" />
                        <input value={newVaccine.status} onChange={(e) => setNewVaccine({ ...newVaccine, status: e.target.value })} placeholder="Estado o fecha" className="input bg-white" />
                      </div>
                      <button onClick={addVaccine} className="mt-5 btn-primary">Agregar vacuna</button>
                    </div>
                  )}
                </MainCard>
                <InfoCard
                  title="Estado de vacunas"
                  items={[
                    'Max - Rabia próxima en Junio 2026',
                    'Max - Refuerzo anual programado para Enero 2027',
                    'Luna - Rabia felina en Agosto 2026',
                    'Luna - Leucemia felina en Noviembre 2026',
                  ]}
                />
              </section>
            </>
          )}
 
          {page === 'Consultas' && (
            <>
              <PageTitle title="Consultas" />
              <section className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-4 xl:gap-5">
                <MainCard title={role === 'Veterinario' ? 'Consultas de clientes' : 'Consulta veterinaria'}>
                  {role === 'Cliente' && (
                    <>
                      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Escribe tu consulta veterinaria..." className="w-full h-40 bg-[#F4F8FC] rounded-3xl p-5 outline-none resize-none text-lg" />
                      <button onClick={sendMessage} className="mt-5 btn-primary">Enviar consulta</button>
                    </>
                  )}
 
                  <div className="mt-8 bg-[#F4F8FC] rounded-[28px] p-5 sm:p-6">
                    <h3 className="text-2xl font-black text-[#073B88] mb-5">Historial de consultas</h3>
                    <div className="space-y-5">
                      {consultas.map((consulta, index) => (
                        <div key={index} className="bg-white rounded-3xl p-6">
                          <p className="font-black text-[#073B88] text-xl">{consulta.client}</p>
                          <p className="text-slate-500 mt-1">Mascota: {consulta.pet}</p>
                          <p className="text-slate-500 mt-1">Fecha de consulta: {consulta.date}</p>
                          <p className="mt-4 text-slate-700">{consulta.text}</p>
 
                          {consulta.answer && (
                            <div className="mt-4 bg-[#F4F8FC] rounded-2xl p-4 text-slate-600">
                              <strong>Respuesta veterinaria:</strong> {consulta.answer}
                            </div>
                          )}
 
                          {role === 'Veterinario' && (
                            <div className="mt-5">
                              <textarea value={reply} onChange={(e) => setReply(e.target.value)} placeholder="Escribe una respuesta para el cliente..." className="w-full h-24 bg-[#F4F8FC] rounded-2xl p-4 outline-none resize-none" />
                              <button onClick={() => answerConsulta(index)} className="mt-3 btn-primary">Enviar respuesta</button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </MainCard>
 
                <InfoCard
                  title={role === 'Veterinario' ? 'Gestión de consultas' : 'Seguimiento'}
                  items={role === 'Veterinario'
                    ? ['Revisar mensajes de clientes', 'Responder consultas preventivas', 'Dar seguimiento por mascota', 'Mantener comunicación registrada']
                    : ['Historial de consultas disponible', 'Respuesta estimada: 24 horas', 'Comunicación registrada', 'Seguimiento preventivo activo']}
                />
              </section>
            </>
          )}
 
          {page === 'Clientes' && role === 'Veterinario' && (
            <>
              <PageTitle title="Clientes" />
              <section className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-4 xl:gap-5">
                <MainCard title="Gestión de clientes">
                  <div className="space-y-5">
                    {clients.map((client, index) => (
                      <div key={index} className="bg-[#F4F8FC] rounded-3xl p-6">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-5">
                          <div>
                            <h3 className="text-2xl font-black text-[#073B88]">{client.name}</h3>
                            <div className="mt-3 space-y-2 text-slate-600">
                              <p>📞 {client.phone}</p>
                              <p>✉️ {client.email}</p>
                              <p>🐾 Mascotas: {client.pets}</p>
                              <p>🛡️ Plan: {getCurrentClientPlan(client)}</p>
                            </div>
                          </div>
                          <button onClick={() => { setSelectedClient(client); setPage('Expediente') }} className="btn-primary">Ver expediente</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </MainCard>
                <InfoCard title="Control de clientes" items={[`${clients.length} clientes registrados`, 'Datos de contacto disponibles', 'Mascotas asociadas por cliente', 'Membresías activas en seguimiento']} />
              </section>
            </>
          )}
 
          {page === 'Expediente' && selectedClient && (
            <>
              <PageTitle title={`Expediente de ${selectedClient.name}`} />
              <section className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-4 xl:gap-5">
                <MainCard title="Información del cliente">
                  <InfoList items={[`Nombre: ${selectedClient.name}`, `Teléfono: ${selectedClient.phone}`, `Correo: ${selectedClient.email}`, `Mascotas: ${selectedClient.pets}`, `Plan: ${getCurrentClientPlan(selectedClient)}`]} />
                  <button onClick={() => setPage('Clientes')} className="mt-6 btn-primary">Volver a clientes</button>
                </MainCard>
                <InfoCard title="Seguimiento médico" items={['Vacunas en seguimiento', 'Calendario preventivo activo', 'Consultas registradas', 'Expediente disponible para control médico']} />
              </section>
            </>
          )}
 
          {page === 'Veterinario' && role === 'Cliente' && (
            <>
              <PageTitle title="Veterinario" />
              <section className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-4 xl:gap-5">
                <MainCard title="Veterinario responsable">
                  <div className="bg-[#F4F8FC] rounded-[28px] p-6 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-black text-[#073B88]">{vetName}</h2>
                    <div className="mt-6 space-y-4 text-lg sm:text-xl text-slate-600">
                      <div className="bg-white rounded-2xl p-5">Especialidad: {vetSpecialty}</div>
                      <div className="bg-white rounded-2xl p-5">Teléfono: {vetPhone}</div>
                      <div className="bg-white rounded-2xl p-5">Correo: {vetEmail}</div>
                      <div className="bg-white rounded-2xl p-5">Horario: Lunes a Viernes - 9:00 AM a 6:00 PM</div>
                    </div>
                    <button onClick={() => goTo('Consultas')} className="mt-6 btn-primary">Contactar veterinario</button>
                  </div>
                </MainCard>
                <InfoCard title="Atención médica" items={['Medicina preventiva', 'Seguimiento por membresía', 'Comunicación mediante consultas', 'Atención programada']} />
              </section>
            </>
          )}
 
          {page === 'Plan' && (
            <>
              <PageTitle title={role === 'Veterinario' ? 'Plan profesional' : 'Mi Membresía'} />
              <section className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-4 xl:gap-5">
                <MainCard title={role === 'Veterinario' ? 'Plan para gestión veterinaria' : 'Membresía activa'}>
                  {role === 'Veterinario' ? (
                    <PlanCard label="Plan profesional activo" title="Pet Prevent Pro" text="Herramienta profesional para administrar clientes, mascotas, consultas, vacunas y calendarios preventivos. Costo mensual del plan profesional: $1,299 MXN / mes." buttonText="Administrar plan" onClick={() => goTo('AdministrarPlan')} />
                  ) : (
                    <PlanCard label="Plan activo" title={activePlan.name} text={`Plan activo para ${activePlan.pets}. Costo mensual: ${activePlan.price}. Incluye seguimiento preventivo, consultas, vacunas y calendario personalizado.`} buttonText="Administrar membresía" onClick={() => goTo('AdministrarPlan')} />
                  )}
                </MainCard>
                <InfoCard
                  title={role === 'Veterinario' ? 'Herramientas incluidas' : 'Estado de membresía'}
                  items={role === 'Veterinario'
                    ? ['Costo: $1,299 MXN / mes', 'Gestión de clientes y mascotas', 'Control de vacunas por paciente', 'Calendario preventivo editable', 'Seguimiento de consultas']
                    : [`Plan actual: ${activePlan.name}`, `Cobertura: ${activePlan.pets}`, `Costo: ${activePlan.price}`, 'Membresía activa']}
                />
              </section>
            </>
          )}
 
          {page === 'AdministrarPlan' && (
            <>
              <PageTitle title="Administrar plan" />
              <section className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-4 xl:gap-5">
                <MainCard title={role === 'Veterinario' ? 'Administración del plan profesional' : 'Administración de membresía'}>
                  <InfoList items={role === 'Veterinario'
                    ? ['Plan actual: Pet Prevent Pro', 'Costo mensual: $1,299 MXN / mes', 'Estado: Activo', 'Acceso a gestión de clientes', 'Acceso a calendario, vacunas y consultas']
                    : [`Plan actual: ${activePlan.name}`, 'Estado: Activo', `Cobertura: ${activePlan.pets}`, `Costo: ${activePlan.price}`, 'Mascotas incluidas: Max y Luna', 'Beneficios preventivos habilitados']}
                  />
                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <button onClick={() => goTo('Plan')} className="btn-primary">Volver al plan</button>
                    {role === 'Cliente' && <button onClick={() => goTo('Planes')} className="btn-secondary">Ver otros planes</button>}
                  </div>
                </MainCard>
                <InfoCard title="Opciones" items={['Revisar plan actual', 'Actualizar información', 'Consultar beneficios', 'Solicitar cambio de plan']} />
              </section>
            </>
          )}
 
          {page === 'Planes' && role === 'Cliente' && (
            <>
              <PageTitle title="Planes disponibles" />
              <section className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-4 xl:gap-5">
                <MainCard title="Planes de membresía">
                  <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
                    {membershipPlans.map((plan, index) => (
                      <div key={index} className={`rounded-[28px] p-6 flex flex-col shadow-soft ${activePlan.name === plan.name ? 'bg-[#EAF3FF] border-4 border-[#22B14C]' : 'bg-[#F4F8FC]'}`}>
                        <p className="text-[#22B14C] font-black">{plan.pets}</p>
                        <h3 className="text-3xl font-black text-[#073B88] mt-2">{plan.name}</h3>
                        <p className="text-2xl font-black mt-4">{plan.price}</p>
                        {activePlan.name === plan.name && <p className="mt-3 bg-[#22B14C] text-white rounded-2xl p-3 font-black text-center">Plan activo</p>}
                        <div className="mt-5 space-y-3 flex-1">
                          {plan.benefits.map((benefit, i) => <div key={i} className="bg-white rounded-2xl p-4 text-slate-600">{benefit}</div>)}
                        </div>
                        <button onClick={() => startPlanChange(plan)} className="mt-6 btn-primary w-full">
                          {activePlan.name === plan.name ? 'Plan actual' : 'Cambiar a este plan'}
                        </button>
                      </div>
                    ))}
                  </div>
 
                  <div className="mt-8 bg-[#FFF8E8] border-2 border-[#F4D03F] rounded-[28px] p-6">
                    <h3 className="text-2xl font-black text-[#073B88] mb-4">Términos y condiciones</h3>
                    <ul className="space-y-3 text-slate-700 leading-relaxed">
                      <li>• Todos los planes incluyen los mismos beneficios preventivos.</li>
                      <li>• Los descuentos aumentan según el número de mascotas cubiertas.</li>
                      <li>• Cada membresía cubre únicamente el número de mascotas indicado.</li>
                      <li>• El plan Pet Prevent Elite cubre de 6 a 10 mascotas bajo un mismo tutor.</li>
                      <li>• Para refugios, criaderos, resguardos o grupos numerosos se aplicará cotización personalizada.</li>
                    </ul>
                  </div>
                </MainCard>
                <InfoCard title="Beneficios generales" items={['Planes según número de mascotas', 'Mismos beneficios preventivos', 'Mayor descuento en planes grandes', 'Seguimiento médico continuo']} />
              </section>
            </>
          )}
 
          {page === 'NuevaSuscripcion' && (
            <>
              <PageTitle title="Nueva suscripción" />
              <section className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-4 xl:gap-5">
                <MainCard title="Datos para activar la membresía">
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Field label="Nombre del titular"><input value={userName} onChange={(e) => setUserName(e.target.value)} className="input" /></Field>
                      <Field label="Correo electrónico"><input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="input" /></Field>
                      <Field label="Teléfono"><input value={userPhone} onChange={(e) => setUserPhone(e.target.value)} className="input" /></Field>
                      <Field label="Nombre de la clínica veterinaria"><input value={paymentData.clinic} onChange={(e) => setPaymentData({ ...paymentData, clinic: e.target.value })} className="input" /></Field>
                    </div>
 
                    <div className="bg-[#F4F8FC] rounded-[28px] p-6">
                      <h3 className="text-2xl font-black text-[#073B88] mb-5">Plan seleccionado</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="soft-row">{pendingPlan.name}</div>
                        <div className="soft-row">{pendingPlan.pets}</div>
                        <div className="soft-row">{pendingPlan.price}</div>
                      </div>
                    </div>
 
                    <Field label="Método de pago">
                      <select className="input">
                        <option>Tarjeta de crédito o débito</option>
                        <option>Transferencia bancaria</option>
                        <option>Pago en clínica</option>
                      </select>
                    </Field>
 
                    <div className="bg-[#F4F8FC] rounded-[28px] p-6">
                      <h3 className="text-2xl font-black text-[#073B88] mb-5">Datos de tarjeta</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Nombre del titular de la tarjeta">
                          <input value={paymentData.cardName} onChange={(e) => setPaymentData({ ...paymentData, cardName: e.target.value })} placeholder="Nombre como aparece en la tarjeta" className="input" />
                        </Field>
                        <Field label="Número de tarjeta">
                          <input value={paymentData.cardNumber} onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })} placeholder="0000 0000 0000 0000" maxLength="19" className="input" />
                        </Field>
                        <Field label="Fecha de vencimiento">
                          <input value={paymentData.expiration} onChange={(e) => setPaymentData({ ...paymentData, expiration: e.target.value })} placeholder="MM/AA" maxLength="5" className="input" />
                        </Field>
                        <Field label="CVV">
                          <input value={paymentData.cvv} onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })} placeholder="123" maxLength="4" className="input" />
                        </Field>
                      </div>
                      <p className="text-sm text-slate-500 mt-4">
                        Estos campos son para el prototipo visual. En una versión real, el pago debe conectarse a una pasarela segura como Stripe, Mercado Pago o PayPal.
                      </p>
                    </div>
 
                    <Field label="Observaciones">
                      <textarea value={paymentData.observations} onChange={(e) => setPaymentData({ ...paymentData, observations: e.target.value })} placeholder="Ej. Solicito activar la membresía para mis mascotas registradas." className="input min-h-[120px] resize-none" />
                    </Field>
 
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button onClick={confirmSubscription} className="btn-primary"><FaCreditCard /> Pagar y confirmar suscripción</button>
                      <button onClick={() => setPage('Planes')} className="btn-secondary">Volver a planes</button>
                    </div>
                  </div>
                </MainCard>
 
                <InfoCard title="Resumen de pago" items={[`Plan: ${pendingPlan.name}`, `Cobertura: ${pendingPlan.pets}`, `Total mensual: ${pendingPlan.price}`, 'Estado: Pendiente de confirmación', 'Beneficios activos al confirmar el pago']} />
              </section>
            </>
          )}
 
          {page === 'Notificaciones' && (
            <>
              <PageTitle title="Notificaciones" />
              <section className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-4 xl:gap-5">
                <MainCard title="Centro de notificaciones">
                  <InfoList items={notificationItems.length ? [...notificationItems, 'Notificaciones activas'] : ['Notificaciones desactivadas']} />
                  <button onClick={() => setNotifications(!notifications)} className="mt-6 btn-primary">
                    {notifications ? 'Desactivar notificaciones' : 'Activar notificaciones'}
                  </button>
                </MainCard>
                <InfoCard title="Estado" items={[notifications ? 'Recordatorios activos' : 'Recordatorios desactivados', 'Avisos de vacunas', 'Avisos de consultas', 'Avisos de calendario']} />
              </section>
            </>
          )}
 
          {page === 'Ayuda' && (
            <>
              <PageTitle title="Ayuda" />
              <section className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-4 xl:gap-5">
                <MainCard title="Centro de ayuda">
                  {(role === 'Veterinario'
                    ? [
                        ['¿Cómo agrego una mascota?', 'Entra a Mascotas y usa el botón Agregar nueva mascota. Después puedes editar sus datos desde el perfil.'],
                        ['¿Cómo agrego eventos al calendario?', 'En Calendario llena el formulario con mascota, día y nombre del evento preventivo.'],
                        ['¿Cómo respondo consultas?', 'En Consultas podrás revisar mensajes de clientes y enviar respuestas.'],
                      ]
                    : [
                        ['¿Cómo reviso el calendario de mi mascota?', 'Entra a Calendario para consultar los eventos preventivos programados por tu veterinario.'],
                        ['¿Cómo reviso vacunas?', 'Entra a Vacunas para ver el esquema preventivo de cada mascota.'],
                        ['¿Cómo contacto a mi veterinario?', 'Entra a Veterinario o Consultas para enviar un mensaje.'],
                      ]
                  ).map((faq, index) => (
                    <div key={index} className="mb-4">
                      <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full text-left bg-[#F4F8FC] rounded-2xl p-5 text-xl font-black text-[#073B88]">
                        {faq[0]}
                      </button>
                      {openFaq === index && <p className="bg-white p-5 text-slate-600 rounded-2xl">{faq[1]}</p>}
                    </div>
                  ))}
                </MainCard>
                <InfoCard title="Soporte" items={['Horario: 9:00 AM - 6:00 PM', 'Atención mediante plataforma', 'Preguntas frecuentes disponibles']} />
              </section>
            </>
          )}
 
          {page === 'Ajustes' && (
            <>
              <PageTitle title="Ajustes" />
              <section className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-4 xl:gap-5">
                <MainCard title={role === 'Veterinario' ? 'Perfil profesional' : 'Configuración de cuenta'}>
                  {role === 'Cliente' ? (
                    <div className="space-y-5">
                      <div className="bg-[#F4F8FC] rounded-[28px] p-5 flex flex-col sm:flex-row sm:items-center gap-5">
                        <img src={clientPhoto} alt={userName} className="w-24 h-24 rounded-full object-cover shadow-soft ring-4 ring-white" />
                        <div>
                          <h3 className="text-2xl font-black text-[#073B88]">Foto de perfil</h3>
                          <p className="text-slate-500 mb-3">Cambia la imagen que aparece en tu cuenta de cliente.</p>
                          <label className="btn-primary cursor-pointer">
                            <FaCamera /> Cambiar foto de perfil
                            <input type="file" accept="image/*" onChange={(e) => updateProfilePhoto(e.target.files?.[0])} className="hidden" />
                          </label>
                        </div>
                      </div>
 
                      <Field label="Nombre completo"><input value={userName} onChange={(e) => setUserName(e.target.value)} className="input" /></Field>
                      <Field label="Correo electrónico"><input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="input" /></Field>
                      <Field label="Teléfono"><input value={userPhone} onChange={(e) => setUserPhone(e.target.value)} className="input" /></Field>
                      <Field label="Cambiar contraseña"><input type="password" placeholder="Nueva contraseña" className="input" /></Field>
                      <Field label="Preferencia de contacto"><select value={contactPreference} onChange={(e) => setContactPreference(e.target.value)} className="input"><option>WhatsApp</option><option>Correo electrónico</option><option>Llamada telefónica</option></select></Field>
                      <button onClick={() => setNotifications(!notifications)} className="btn-primary">{notifications ? 'Desactivar notificaciones' : 'Activar notificaciones'}</button>
                    </div>
                  ) : (
                    <div className="space-y-5">
                      <div className="bg-[#F4F8FC] rounded-[28px] p-5 flex flex-col sm:flex-row sm:items-center gap-5">
                        <img src={vetPhoto} alt={vetName} className="w-24 h-24 rounded-full object-cover shadow-soft ring-4 ring-white" />
                        <div>
                          <h3 className="text-2xl font-black text-[#073B88]">Foto profesional</h3>
                          <p className="text-slate-500 mb-3">Cambia la imagen que aparece en la vista del médico veterinario.</p>
                          <label className="btn-primary cursor-pointer">
                            <FaCamera /> Cambiar foto de perfil
                            <input type="file" accept="image/*" onChange={(e) => updateProfilePhoto(e.target.files?.[0])} className="hidden" />
                          </label>
                        </div>
                      </div>
 
                      <Field label="Nombre del veterinario"><input value={vetName} onChange={(e) => setVetName(e.target.value)} className="input" /></Field>
                      <Field label="Especialidad"><input value={vetSpecialty} onChange={(e) => setVetSpecialty(e.target.value)} className="input" /></Field>
                      <Field label="Teléfono profesional"><input value={vetPhone} onChange={(e) => setVetPhone(e.target.value)} className="input" /></Field>
                      <Field label="Correo profesional"><input value={vetEmail} onChange={(e) => setVetEmail(e.target.value)} className="input" /></Field>
                      <button onClick={() => setNotifications(!notifications)} className="btn-primary">{notifications ? 'Desactivar notificaciones' : 'Activar notificaciones'}</button>
                    </div>
                  )}
                </MainCard>
                <InfoCard title="Estado de cuenta" items={role === 'Veterinario' ? ['Modo profesional activo', 'Perfil médico editable', 'Foto profesional editable', 'Notificaciones configurables', 'Plan profesional activo'] : ['Cuenta verificada', 'Datos de contacto editables', 'Foto de perfil editable', 'Preferencia de contacto configurada', `Membresía activa: ${activePlan.name}`]} />
              </section>
            </>
          )}
        </main>
      </div>
 
      <MobileBottomNav page={page} goTo={goTo} />
    </div>
  )
}
 
function MobileTopBar({ role, userName, notificationCount, goTo, setMobileMenu, clientPhoto, vetPhoto, updateProfilePhoto }) {
  const currentProfileImage = role === 'Veterinario' ? vetPhoto : clientPhoto
 
  return (
    <div className="lg:hidden flex items-center justify-between mb-5 bg-white rounded-[28px] p-4 shadow-soft">
      <div className="flex items-center gap-3">
        <div className="w-16 h-16 rounded-full bg-white shadow-soft flex items-center justify-center overflow-hidden">
          <img src={logo} alt="Pet Prevent" className="w-[74px] h-[74px] object-cover rounded-full scale-[1.12]" />
        </div>
        <div>
          <p className="text-xs text-slate-500 font-bold">{role}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <NotificationButton count={notificationCount} onClick={() => goTo('Notificaciones')} />
        <label className="relative cursor-pointer" title="Cambiar foto de perfil"><img src={currentProfileImage} alt={userName} className="w-11 h-11 rounded-full object-cover shadow-soft" /><span className="absolute -bottom-1 -right-1 bg-[#22B14C] text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px]"><FaCamera /></span><input type="file" accept="image/*" onChange={(e) => updateProfilePhoto(e.target.files?.[0])} className="hidden" /></label>
        <button onClick={() => setMobileMenu(true)} className="bg-white rounded-2xl w-12 h-12 shadow-soft flex items-center justify-center text-[#073B88]"><FaBars /></button>
      </div>
    </div>
  )
}
 
function Header({ role, userName, notificationCount, goTo, clientPhoto, vetPhoto, updateProfilePhoto }) {
  const currentProfileImage = role === 'Veterinario' ? vetPhoto : clientPhoto
 
  return (
    <header className="hidden lg:flex justify-between items-center mb-5">
      <div>
        <p className="text-[#22B14C] font-black text-base">Panel Pet Prevent</p>
        <h1 className="text-3xl 2xl:text-4xl font-black text-[#071B4D]">¡Hola, Mariana!</h1>
        <p className="text-base 2xl:text-lg text-slate-500 mt-1">Bienvenida a <span className="text-[#22B14C] font-bold">Pet Prevent</span> 🐾</p>
      </div>
      <div className="flex items-center gap-4">
        <NotificationButton count={notificationCount} onClick={() => goTo('Notificaciones')} />
        <div className="w-[1px] h-14 bg-slate-200" />
        <label className="relative cursor-pointer group" title="Cambiar foto de perfil">
          <img src={currentProfileImage} alt={userName} className="w-12 h-12 rounded-full object-cover shadow-soft ring-4 ring-white" />
          <span className="absolute -bottom-1 -right-1 bg-[#22B14C] text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px]"><FaCamera /></span>
          <input type="file" accept="image/*" onChange={(e) => updateProfilePhoto(e.target.files?.[0])} className="hidden" />
        </label>
        <div>
          <p className="font-black text-lg text-[#071B4D]">{userName}</p>
          <p className="text-[#22B14C] font-black">{role}</p>
        </div>
        <FaChevronDown className="text-[#071B4D]" />
      </div>
    </header>
  )
}
 
function NotificationButton({ count, onClick }) {
  return (
    <button onClick={onClick} className="relative bg-white w-12 h-12 rounded-2xl shadow-soft flex items-center justify-center text-[#073B88]">
      <FaBell className="text-2xl" />
      {count > 0 && <span className="absolute -top-2 -right-2 bg-[#22B14C] text-white text-sm font-black w-7 h-7 rounded-full flex items-center justify-center shadow-lg">{count}</span>}
    </button>
  )
}
 
function Sidebar({ page, role, goTo, openAccess, mobileMenu, setMobileMenu }) {
  const menuItems = [
    ['Dashboard', <FaHome />, 'Dashboard'],
    ['Mascotas', <FaPaw />, 'Mascotas'],
    ['Calendario', <FaCalendarAlt />, 'Calendario Preventivo'],
    ['Vacunas', <FaSyringe />, 'Vacunas'],
    ['Consultas', <FaComments />, 'Consultas'],
    [role === 'Veterinario' ? 'Clientes' : 'Veterinario', <FaStethoscope />, role === 'Veterinario' ? 'Clientes' : 'Veterinarios'],
    ['Ayuda', <FaQuestionCircle />, 'Ayuda'],
    ['Plan', <FaShieldAlt />, role === 'Veterinario' ? 'Plan profesional' : 'Mi Membresía'],
    ['Ajustes', <FaCog />, 'Ajustes'],
  ]
 
  return (
    <>
      {mobileMenu && <div onClick={() => setMobileMenu(false)} className="fixed inset-0 bg-black/40 z-40 lg:hidden" />}
      <aside className={`fixed lg:sticky top-0 left-0 z-50 lg:z-auto h-screen w-[285px] bg-gradient-to-b from-[#073B88] to-[#003B8E] text-white flex flex-col shadow-2xl transition-transform duration-300 ${mobileMenu ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="bg-white pt-5 pb-5 px-5 flex justify-center">
          <div className="w-56 h-56 rounded-full bg-white border-[8px] border-[#F4F8FC] shadow-soft flex items-center justify-center overflow-hidden">
            <img src={logo} alt="Pet Prevent" className="w-64 h-64 object-cover rounded-full scale-[1.18]" />
          </div>
        </div>
 
        <nav className="px-4 py-4 space-y-2 overflow-y-auto">
          {menuItems.map(([target, icon, text]) => (
            <Menu key={text} active={page === target || (target === 'Plan' && page === 'AdministrarPlan')} icon={icon} text={text} onClick={() => goTo(target)} />
          ))}
        </nav>
 
        <div className="mx-4 mt-auto mb-5 border border-white/20 rounded-[24px] p-3.5">
          <p className="text-center font-bold mb-3 text-sm">Cambiar vista</p>
          <div className="grid grid-cols-2 gap-2.5">
            <button onClick={() => openAccess('Cliente')} className={`${role === 'Cliente' ? 'bg-[#22B14C]' : 'bg-white/10'} py-2.5 rounded-2xl font-bold text-sm`}>Cliente</button>
            <button onClick={() => openAccess('Veterinario')} className={`${role === 'Veterinario' ? 'bg-[#22B14C]' : 'bg-white/10'} py-2.5 rounded-2xl font-bold text-sm`}>MVZ</button>
          </div>
        </div>
      </aside>
    </>
  )
}
function MobileBottomNav({ page, goTo }) {
  const items = [
    ['Dashboard', <FaHome />, 'Dashboard'],
    ['Mascotas', <FaPaw />, 'Mascotas'],
    ['Calendario', <FaCalendarAlt />, 'Calendario'],
    ['Vacunas', <FaSyringe />, 'Vacunas'],
    ['Consultas', <FaComments />, 'Más'],
  ]
 
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-[28px] shadow-[0_-8px_30px_rgba(2,24,74,0.12)] z-30 px-2 py-3">
      <div className="grid grid-cols-5 gap-1">
        {items.map(([target, icon, text]) => (
          <button key={target} onClick={() => goTo(target)} className={`flex flex-col items-center gap-1 text-xs font-black ${page === target ? 'text-[#073B88]' : 'text-slate-500'}`}>
            <span className="text-xl">{icon}</span>
            {text}
          </button>
        ))}
      </div>
    </div>
  )
}
 
function HeroBanner({ goTo }) {
  return (
    <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-[#073B88] via-[#004BB5] to-[#18A64A] text-white px-5 sm:px-6 py-6 min-h-[280px] shadow-soft flex">
      <div className="relative z-20 max-w-[340px] flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl xl:text-[42px] font-black leading-tight">Prevenir hoy,<br /><span className="text-[#59D879]">bienestar</span><br />siempre.</h2>
        <p className="mt-5 text-white/90 leading-relaxed">Mantén vacunas, consultas y desparasitación siempre al día.</p>
        <button onClick={() => goTo('Plan')} className="mt-6 bg-white text-[#073B88] px-5 py-3 rounded-2xl font-black w-fit shadow-lg">Ver mi membresía →</button>
      </div>
      <div className="absolute right-0 bottom-0 w-[55%] h-full flex items-end justify-center pointer-events-none">
        <img src={heroImage} alt="Perro y gato" className="h-[78%] xl:h-[88%] object-contain drop-shadow-2xl" />
      </div>
    </div>
  )
}
 
function DashboardSide({ pets, goTo }) {
  return (
    <div className="space-y-4">
      <CalendarBox pets={pets} />
      <UpcomingEvents pets={pets} />
      <button
        onClick={() => goTo('Calendario')}
        className="w-full bg-[#22B14C] text-white py-4 rounded-2xl font-black text-lg shadow-lg flex items-center justify-center gap-3"
      >
        <FaCalendarAlt /> Agendar cita
      </button>
    </div>
  )
}
function PetSection({ pets, role, addPet, goTo, updatePetImage }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl sm:text-3xl font-black text-[#073B88] flex items-center gap-3"><FaPaw /> Mis Mascotas</h2>
        {role === 'Veterinario' && <button onClick={addPet} className="btn-primary">+ Agregar</button>}
      </div>
      <div className="grid grid-cols-2 gap-4 xl:gap-5">
        {pets.map((pet, index) => <Pet key={index} {...pet} index={index} role={role} goTo={goTo} updatePetImage={updatePetImage} />)}
      </div>
    </div>
  )
}
 
function Pet({ image, name, breed, age, status, role, goTo, index, updatePetImage }) {
  return (
    <div className="bg-white rounded-[22px] p-3 shadow-soft border border-slate-100">
      <div className="relative bg-[#F4F8FC] rounded-2xl h-[135px] sm:h-[150px] flex items-center justify-center overflow-hidden">
        {image ? <img src={image} alt={name || 'Mascota'} className="w-full h-full object-cover" /> : <div className="flex flex-col items-center justify-center text-[#073B88]"><FaCamera className="text-4xl mb-3" /><p className="font-black">Agregar foto</p></div>}
        <label className="absolute -bottom-1 -right-1 w-12 h-12 bg-[#22B14C] rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-105 transition" title="Cambiar foto">
          <FaCamera />
          <input type="file" accept="image/*" onChange={(e) => updatePetImage(index, e.target.files?.[0])} className="hidden" />
        </label>
      </div>
      <div className="pt-5">
        <h3 className="text-xl sm:text-2xl font-black text-[#071B4D]">{name || 'Nombre'}</h3>
        <p className="text-slate-500 text-sm sm:text-lg">{breed || 'Raza'}</p>
        <p className="text-slate-500 mt-1 text-sm">♟ {age || 'Edad'}</p>
        <p className="mt-2 text-[#22B14C] font-black text-sm">{status}</p>
        <div className="grid grid-cols-1 gap-2 mt-4">
          <label className="w-full bg-[#EAF3FF] text-[#073B88] py-2.5 rounded-xl font-black shadow-sm cursor-pointer text-center flex items-center justify-center gap-2">
            <FaCamera /> Cambiar foto
            <input type="file" accept="image/*" onChange={(e) => updatePetImage(index, e.target.files?.[0])} className="hidden" />
          </label>
          <button onClick={() => goTo('Mascotas')} className="w-full bg-[#22B14C] text-white py-3 rounded-xl font-black shadow-lg">{role === 'Veterinario' ? 'Editar perfil' : 'Ver perfil'}</button>
        </div>
      </div>
    </div>
  )
}
 
function QuickSection({ goTo, role }) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-black text-[#073B88] mb-5 flex items-center gap-3">⚡ Accesos rápidos</h2>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6">
        <Quick onClick={() => goTo('Vacunas')} icon={<FaSyringe />} title="Vacunas" text="Ver esquema" tone="blue" />
        <Quick onClick={() => goTo('Calendario')} icon={<FaCalendarAlt />} title="Agendar cita" text="Nueva consulta" tone="green" />
        <Quick onClick={() => goTo('Consultas')} icon={<FaComments />} title="Hacer consulta" text="Escribe al vet" tone="blue" />
        <Quick onClick={() => goTo(role === 'Veterinario' ? 'Clientes' : 'Plan')} icon={<FaClipboardList />} title={role === 'Veterinario' ? 'Clientes' : 'Mi Membresía'} text={role === 'Veterinario' ? 'Gestionar' : 'Ver plan'} tone="green" />
      </div>
    </div>
  )
}
 
function Quick({ icon, title, text, onClick, tone }) {
  const iconClass = tone === 'green' ? 'text-[#22B14C]' : 'text-[#0B64D8]'
  return (
    <button onClick={onClick} className="bg-white rounded-[22px] p-4 text-center shadow-soft border border-slate-100 hover:scale-[1.02] transition">
      <div className={`flex justify-center text-2xl sm:text-3xl ${iconClass} mb-3`}>{icon}</div>
      <h3 className="font-black text-lg sm:text-xl">{title}</h3>
      <p className="text-slate-500 mt-1 text-sm sm:text-base">{text}</p>
    </button>
  )
}
 
function PlanCard({ label, title, text, buttonText, onClick }) {
  return (
    <div className="bg-gradient-to-br from-[#073B88] to-[#046B8F] rounded-[28px] p-6 sm:p-7 text-white shadow-soft">
      <p className="text-white/80">{label}</p>
      <h3 className="text-4xl sm:text-5xl font-black mt-2">{title}</h3>
      <p className="text-lg sm:text-xl mt-5 leading-relaxed">{text}</p>
      <button onClick={onClick} className="mt-8 bg-white text-[#073B88] px-8 py-4 rounded-2xl font-black shadow-lg">{buttonText}</button>
    </div>
  )
}
 
function PetCalendar({ pet, petIndex, role, onDone, onDelete }) {
  const days = Array.from({ length: 30 }, (_, i) => i + 1)
  const markedDays = pet.calendarEvents.map((event) => event.day)
 
  return (
    <div className="bg-[#F4F8FC] rounded-[24px] p-4 sm:p-5 border border-slate-100 overflow-hidden">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h3 className="text-xl font-black text-[#073B88] truncate">{pet.name || 'Mascota'}</h3>
        <span className="text-xs font-black text-slate-500 bg-white px-3 py-1 rounded-full shrink-0">Junio 2026</span>
      </div>
 
      <div className="calendar-grid">
        {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day) => (
          <div key={day} className="calendar-head">
            {day}
          </div>
        ))}
 
        {days.map((day) => (
          <div key={day} className="calendar-cell h-9">
            <span
              className="calendar-dot"
              style={{
                backgroundColor: markedDays.includes(day) ? pet.calendarColor : 'transparent',
                color: markedDays.includes(day) ? 'white' : '#64748b',
              }}
            >
              {day}
            </span>
          </div>
        ))}
      </div>
 
      <div className="mt-5 space-y-3">
        {pet.calendarEvents.map((event, index) => (
          <div key={index} className="bg-white rounded-2xl p-3.5 text-slate-600 flex justify-between items-center gap-3">
            <span className={event.done ? 'line-through opacity-60' : ''}>Día {event.day} - {event.text}</span>
            {role === 'Veterinario' && <div className="flex gap-2"><button onClick={() => onDone(petIndex, index)} className="text-[#22B14C]"><FaCheck /></button><button onClick={() => onDelete(petIndex, index)} className="text-red-500"><FaTrash /></button></div>}
          </div>
        ))}
      </div>
    </div>
  )
}
function VaccineCard({ pet, petIndex, role, onApply, onDelete }) {
  return (
    <div className="bg-[#F4F8FC] rounded-[28px] p-5 sm:p-6">
      <h3 className="text-2xl font-black text-[#073B88] mb-5">{pet.name || 'Mascota'}</h3>
      <div className="space-y-4">
        {pet.vaccines.map((vaccine, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 text-slate-600">
            <p className="font-black text-[#073B88]">{vaccine.name}</p>
            <p>{vaccine.status}</p>
            {role === 'Veterinario' && <div className="flex gap-3 mt-3"><button onClick={() => onApply(petIndex, index)} className="bg-[#22B14C] text-white px-4 py-2 rounded-xl font-bold">Aplicada</button><button onClick={() => onDelete(petIndex, index)} className="bg-red-500 text-white px-4 py-2 rounded-xl font-bold">Eliminar</button></div>}
          </div>
        ))}
      </div>
    </div>
  )
}
 
function CalendarBox({ pets }) {
  const days = Array.from({ length: 30 }, (_, i) => i + 1)
  const marked = [10, 15, 20]
 
  return (
    <div className="bg-white rounded-[24px] p-5 shadow-soft border border-slate-100 w-full overflow-hidden">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h2 className="text-base font-black text-[#073B88] inline-flex items-center gap-2 min-w-0 leading-none">
          <FaCalendarAlt className="shrink-0" />
          <span className="whitespace-nowrap leading-none">Calendario Preventivo</span>
        </h2>
 
        <button
          onClick={() => {}}
          className="border border-[#22B14C] text-[#22B14C] px-3 py-1 rounded-full font-black text-xs shrink-0"
        >
          Ver todo
        </button>
      </div>
 
      <div className="grid grid-cols-[32px_1fr_32px] items-center mb-3 text-[#071B4D]">
        <button className="w-8 h-8 rounded-full bg-[#F4F8FC] font-black flex items-center justify-center">‹</button>
        <p className="text-center font-black text-sm sm:text-base">Junio 2026</p>
        <button className="w-8 h-8 rounded-full bg-[#F4F8FC] font-black flex items-center justify-center">›</button>
      </div>
 
      <div className="calendar-grid">
        {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day) => (
          <div key={day} className="calendar-head">
            {day}
          </div>
        ))}
 
        {days.map((day) => (
          <div key={day} className="calendar-cell h-9">
            <span
              className={`calendar-dot ${
                marked.includes(day)
                  ? day === 15
                    ? 'bg-[#0B64D8] text-white shadow-md'
                    : 'bg-[#22B14C] text-white shadow-md'
                  : 'text-slate-700'
              }`}
            >
              {day}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
function UpcomingEvents({ pets }) {
  const events = pets.flatMap((pet) => pet.calendarEvents.map((event) => ({ ...event, pet: pet.name }))).slice(0, 3)
  const colors = ['bg-[#22B14C]', 'bg-[#0B64D8]', 'bg-orange-400']
  return (
    <div className="bg-white rounded-[26px] p-4 shadow-soft border border-slate-100">
      <h2 className="text-lg sm:text-xl font-black text-[#073B88] mb-4 flex items-center gap-3">🕒 Próximos eventos</h2>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={`${event.pet}-${event.day}-${index}`} className="bg-white border border-slate-100 rounded-2xl p-3 flex items-center gap-3 shadow-sm">
            <div className={`${colors[index] || colors[0]} w-11 h-11 rounded-full flex items-center justify-center text-white text-xl shrink-0`}><FaSyringe /></div>
            <div className="flex-1">
              <p className="font-black text-[#22B14C]">{event.day} Junio</p>
              <p className="text-sm text-slate-600">{event.text} - {event.pet}</p>
            </div>
            <p className="text-sm text-[#073B88]">{event.hour}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
 
function Field({ label, children }) {
  return (
    <div>
      <label className="font-black text-[#073B88] text-lg sm:text-xl">{label}</label>
      <div className="[&_.input]:w-full [&_.input]:bg-[#F4F8FC] [&_.input]:rounded-2xl [&_.input]:p-4 [&_.input]:outline-none [&_.input]:mt-3 [&_.input]:text-lg">{children}</div>
    </div>
  )
}
 
function MainCard({ title, children }) {
  return (
    <div className="bg-white rounded-[24px] p-4 sm:p-5 shadow-soft min-h-[300px] border border-slate-100">
      <h2 className="text-2xl sm:text-3xl xl:text-4xl font-black text-[#073B88] mb-6">{title}</h2>
      {children}
    </div>
  )
}
 
function InfoCard({ title, items }) {
  return (
    <div className="bg-white rounded-[24px] p-4 sm:p-5 shadow-soft h-fit border border-slate-100">
      <h2 className="text-2xl xl:text-3xl font-black text-[#073B88] mb-5">{title}</h2>
      <InfoList items={items} />
    </div>
  )
}
 
function InfoList({ items }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => <div key={index} className="bg-[#F4F8FC] rounded-2xl p-4 text-base sm:text-lg text-slate-600">{item}</div>)}
    </div>
  )
}
 
function Stat({ icon, title, value, text, color }) {
  const colorClass = color === 'green' ? 'from-[#59D879] to-[#169A36]' : 'from-[#2B7BFF] to-[#073B88]'
  return (
    <div className="bg-white rounded-[24px] p-4 shadow-soft flex items-center gap-4 border border-slate-100">
      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${colorClass} text-white flex items-center justify-center text-2xl sm:text-3xl shadow-lg`}>{icon}</div>
      <div>
        <p className="font-black text-base sm:text-xl">{title}</p>
        <h3 className="text-3xl sm:text-4xl font-black">{value}</h3>
        <p className="text-slate-500 text-sm sm:text-base">{text}</p>
      </div>
    </div>
  )
}
 
function PageTitle({ title }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl sm:text-3xl xl:text-5xl font-black text-[#073B88]">{title}</h2>
      <p className="text-slate-500 text-lg sm:text-xl mt-2">Gestión organizada dentro de Pet Prevent.</p>
    </div>
  )
}
 
function Menu({ icon, text, active, onClick }) {
  return (
    <button onClick={onClick} className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-base transition-all ${active ? 'bg-[#22B14C] shadow-lg' : 'hover:bg-white/10'}`}>
      <span className="text-2xl">{icon}</span>
      {text}
    </button>
  )
}

