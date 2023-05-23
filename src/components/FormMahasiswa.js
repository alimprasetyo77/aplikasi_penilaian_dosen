import { useState } from "react"
const FormMahasiswa = () => {
    const [penilaian, setPenilaian] = useState({
        aspek_penilaian_1: {},
        aspek_penilaian_2: {},
        aspek_penilaian_3: {},
        aspek_penilaian_4: {}
    })
    const handleInputChange = (event, aspek, mahasiswa) => {
        const value = parseInt(event.target.value)
        setPenilaian(prevState => ({
            ...prevState,
            [aspek]: {
                ...prevState[aspek],
                [mahasiswa]: value
            }
        }))
    }
    const simpanData = () => {
        console.log(penilaian)
    }
    return (
        <>
            <h1 className='text-center font-semibold text-3xl pt-8 text-gray-900'>Aplikasi Penilaian Mahasiswa</h1>
            <div className='relative max-w-5xl mx-auto py-2  my-2'>
                <div className='flex items-center justify-center'>
                    <table className="table ">
                        <thead>
                            <tr>
                                <th></th>
                                <th className='font-semibold text-gray-800 py-4 '>Aspek Penilaian 1</th>
                                <th className='font-semibold text-gray-800 py-4 '>Aspek Penilaian 2</th>
                                <th className='font-semibold text-gray-800 py-4 '>Aspek Penilaian 3</th>
                                <th className='font-semibold text-gray-800 py-4 '>Aspek Penilaian 4</th>
                            </tr>
                        </thead>
                        <tbody className=' border shadow border-gray-300 bg-white'>
                            {Array.from(Array(10).keys()).map(i => (
                                <tr key={i}>
                                    <td className='p-4 flex items-center space-x-4'>
                                        <img src="./no-profile-picture.svg" alt="profile" className='w-7 h-7' />
                                        <span className="font-semibold text-sm">Mahasiswa {i + 1}</span>
                                    </td>
                                    <td className='p-4 '>
                                        <select name='aspek_penilaian_1' className='w-32 font-semibold outline-none border border-slate-300 rounded-sm' onChange={event => handleInputChange(event, 'aspek_penilaian_1', `mahasiswa_${i + 1}`)}>
                                            <option hidden>-</option>
                                            {Array.from(Array(10).keys()).map(i => (
                                                <option key={i} value={i + 1}>{i + 1}</option>
                                            ))}

                                        </select>

                                    </td>
                                    <td className='p-4 '>
                                        <select name='aspek_penilaian_2' className='w-32 font-semibold outline-none border border-slate-300 rounded-sm' onChange={event => handleInputChange(event, 'aspek_penilaian_2', `mahasiswa_${i + 1}`)}>
                                            <option hidden>-</option>
                                            {Array.from(Array(10).keys()).map(i => (
                                                <option key={i} value={i + 1}>{i + 1}</option>
                                            ))}
                                        </select>

                                    </td>
                                    <td className='p-4 '>
                                        <select name='aspek_penilaian_3' className='w-32 font-semibold outline-none border border-slate-300 rounded-sm' onChange={event => handleInputChange(event, 'aspek_penilaian_3', `mahasiswa_${i + 1}`)} >
                                            <option hidden>-</option>
                                            {Array.from(Array(10).keys()).map(i => (
                                                <option key={i} value={i + 1}>{i + 1}</option>
                                            ))}
                                        </select>

                                    </td>
                                    <td className='p-4 '>
                                        <select name='aspek_penilaian_4 ' className='w-32 font-semibold outline-none border border-slate-300 rounded-sm' onChange={event => handleInputChange(event, 'aspek_penilaian_4', `mahasiswa_${i + 1}`)} >
                                            <option hidden>-</option>
                                            {Array.from(Array(10).keys()).map(i => (
                                                <option key={i} value={i + 1}>{i + 1}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
                <button className='absolute -bottom-10 right-[115px] px-6 py-2 rounded-sm bg-gray-900 text-white font-semibold' onClick={simpanData}>Simpan</button>
            </div>
        </>
    )
}

export default FormMahasiswa