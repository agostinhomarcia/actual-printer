

import { OurPillars,
    TextPillars,
    Text1,
    Text2,
    Text3 } from "./styles"

export function Pillars() {

    return(

        <OurPillars id='pillars'>
        <h1>NOSSOS PILARES</h1>
      
        <TextPillars>
          <Text1 className = "boxText">
            <h3>Missão</h3>
            <p>
              Oferecer um portfólio completo de soluções em gestão eletrônica,
              impactando positivamente nos negócios dos clientes.
            </p>
          </Text1>
          <Text2 className = "boxText">
          <h3>Visão</h3>
            <p>
              Consolidar-se como empresa referência no seguimento, comprometida
              com a superação diária, o desenvolvimento de nossos recursos
              humanos e otimização de processos.
            </p>
          </Text2>
          <Text3 className = "boxText">
          <h3>Valores</h3>
            <ul className="custom-list">
              <li>Ética</li>
              <li>Qualidade</li>
              <li>Organização</li>
              <li>Disciplina</li>
              <li>Pessoas</li>
            </ul>
          </Text3>
        </TextPillars>
      </OurPillars>
    )
}