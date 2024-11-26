import React, { useState } from 'react';
import Swal from 'sweetalert2';

function _alertaSucesso(titulo, texto) {
    Swal.fire({
        icon: "success",
        title: `${titulo}`,
        text: `${texto}`,
    });
}

function _alertaError(titulo, texto) {
    Swal.fire({
        icon: "error",
        title: `${titulo}`,
        text: `${texto}`,
    });
}


const aprovar = async () => {


    var infoChange = {

        "type": "normal",

        "test_plan": "Validar que a função de extrato de conta global não foi impactada",

        "cmdb_ci": {

            "link": "https://c6bankqa.service-now.com/api/now/table/cmdb_ci/e0c286aedbc0cc10058c1a2f2a961951",

            "value": "e0c286aedbc0cc10058c1a2f2a961951"

        },

        "impact": "3",

        "priority": "4",

        "implementation_plan": "Atividade realizada pela TEMENOS, registrada internamente somente para documentação.",



        "short_description": "Deploy referente ao TSR-168631 (já executada pelo parceiro, segue para documentação)",

        "u_business_description": "Change criada apenas para registrar deploy que será aplicado pela Temenos referente à uma \"melhoria\" de performance na api de extrato de conta global.\nTSR-168631",



        "sys_class_name": "change_request",



        "start_date": "2022-04-13 07:00:00",

        "end_date": "2022-04-13 09:00:00",

        "backout_plan": "Atividade realizada pela TEMENOS, registrada internamente somente para documentação.",

        "business_service": {

            "link": "https://c6bankqa.service-now.com/api/now/table/cmdb_ci_service/f254b1db1b9280943302da45fa4bcb50",

            "value": "f254b1db1b9280943302da45fa4bcb50"

        },

        "assignment_group": {

            "link": "https://c6bankqa.service-now.com/api/now/table/sys_user_group/14b181dddbb1089429a34410ba961970",

            "value": "14b181dddbb1089429a34410ba961970"

        },

        "description": "Change criada apenas para registrar deploy que será aplicado pela Temenos referente à uma \"melhoria\" de performance na api de extrato de conta global.\nTSR-168631",

        "urgency": "3",

        "scope": "3",

        "justification": "Change criada apenas para registrar deploy que será aplicado pela Temenos referente à uma \"melhoria\" de performance na api de extrato de conta global.\nTSR-168631",

        "due_date": "2022-04-08 19:56:20",

        "risk": "4",

        "category": "PARCEIROS",

        "risk_impact_analysis": "Toda a alteração prevista para PRD foi plenamente validada em homologação? Sim. \nEssa mudança pode comprometer a disponibilidade ou performance de algum serviço? Não. \nSe essa mudança falhar, pode resultar em impacto perceptível para o nosso cliente Externo ou Interno?  Não. \nPara executar essa mudança, será necessário o envolvimento de outras áreas (ex: validação da mudança)?  Não. \nMuda algo no consumo da solução (memória, cpu, disco)?  Não. \nA equipe 24x7 precisa acompanhar a saúde do ambiente após a execução da mudança? Não. \nA mudança terá condições de ser plenamente validada ao final de sua execução?  Sim. "

    }
     
    var username = 'svc_user_hackthon'
    var password = 'S*nV(p7*v'


    try {
        const response = await fetch('https://c6bankqa.service-now.com/api/now/table/change_request', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            auth: {
                username,
                password,
              }, 
            body: infoChange
        });

        if (response.ok) {
            _alertaSucesso("Change aprovada!, 'Criando change no ambiente do servicenow!'")
        } else {
            _alertaError('Falha na conexão', 'Não foi possível conectar ao servidor')
        }

    } catch (error) {
        _alertaError('Falha na conexão', 'Não foi possível conectar ao servidor')
    }
}


const reprovar = () => {
    _alertaSucesso("Change Reprovada!", "Requisição foi cancelada!")
}


const Formulario = () => {

    const [formData, setFormData] = useState({
        type: '',
        inpact: '',
        priority: '',
        test_plan: '',
        start_date: '',
        end_Date: '',
        short_description: '',
        description: ''
    });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     alert(`Dados enviados:\nNome: ${formData.name}\nEmail: ${formData.email}\nMensagem: ${formData.message}`);
    // };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', marginTop: '2rem' }}>
            <div>
                <h1>Formulário CHANGE</h1>
            </div>
            <div>
                <h3> Criar uma CHANGE</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }} >
                <div style={{ borderStyle: 'solid', borderRadius: '5px', width: '40rem', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'start', marginTop: '2rem', width: '12rem' }}>
                            <label style={{ margin: '0.1rem' }} htmlFor="">Type: </label>
                            <input type="text" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'start', marginTop: '2rem', width: '12rem' }}>
                            <label htmlFor="" style={{ margin: '0.1rem' }} >Start Date: </label>
                            <input type="date" />
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'start', marginTop: '2rem', width: '12rem' }}>
                            <label style={{ margin: '0.1rem' }} htmlFor="">Inpact: </label>
                            <input type="text" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'start', marginTop: '2rem', width: '12rem' }}>
                            <label style={{ margin: '0.1rem' }} htmlFor="">End Date: </label>
                            <input type="date" />
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'start', marginTop: '2rem', width: '12rem' }}>
                            <label style={{ margin: '0.1rem' }} htmlFor="">Priority: </label>
                            <input type="text" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'start', marginTop: '2rem', width: '12rem' }}>
                            <label style={{ margin: '0.1rem' }} htmlFor="">Short Description: </label>
                            <input type="text" />
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'start', marginTop: '2rem', width: '12rem' }}>
                            <label style={{ margin: '0.1rem' }} htmlFor="">Teste Plan: </label>
                            <textarea name="Text1" cols="20" rows="3"></textarea>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'start', marginTop: '2rem', width: '12rem' }}>
                            <label style={{ margin: '0.1rem' }} htmlFor="">Description: </label>
                            <textarea name="Text1" cols="20" rows="3"></textarea>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                        <div style={{ width: '12rem' }}></div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '12rem', marginTop: '2rem', marginBottom: '2rem' }}>
                            <div>
                                <button onClick={() => reprovar()}>Reprovar</button>
                            </div>
                            <div>
                                <button onClick={() => aprovar()} >Aprovar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formulario;