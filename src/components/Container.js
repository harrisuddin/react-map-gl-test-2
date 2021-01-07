import React from "react";
import "../mobile.css";

function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function Container() {
  return window.innerWidth <= 768 ? (
    <div
      style={{
        maxHeight: "100%",
      }}
    >
      <div
        style={{
          marginLeft: "1rem",
          marginRight: "1rem",
        }}
      >
        neque interdum a. Vestibulum mattis lectus vel est convallis ullamcorper
        sed sit amet sapien. Mauris venenatis, urna vitae suscipit consectetur,
        lectus sem congue leo, quis rutrum nisi turpis quis arcu. Quisque
        commodo erat enim, eu tincidunt magna faucibus vitae. Vivamus malesuada
        scelerisque dui, eu dictum urna. Cras vitae tincidunt arcu, vitae
        aliquet enim. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Pellentesque mauris nulla, cursus eget ex quis, tincidunt
        consequat libero. Phasellus suscipit ipsum sit amet nulla suscipit
        finibus. Pellentesque faucibus id nisi sit amet elementum. Cras placerat
        justo in consectetur blandit. Fusce pharetra facilisis efficitur.
        Vivamus vel urna ac justo tincidunt fringilla a quis magna. Donec
        rhoncus ut magna vel elementum. Nullam egestas pretium urna in ultrices.
        In vel ipsum vel metus pulvinar consequat. Donec dictum eleifend eros,
        et viverra ante cursus ac. Pellentesque bibendum nibh eu tempor tempus.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi purus
        turpis, feugiat et suscipit vitae, gravida faucibus ex. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Nam et interdum leo, ut ullamcorper felis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Duis a consequat velit, eu aliquet mauris. Praesent facilisis mauris sed
        diam pellentesque, nec tristique justo ultrices. Proin accumsan
        dignissim commodo. Donec libero sapien, porta vel posuere ac, euismod
        quis sem. Duis porta risus vitae neque commodo ultricies. Quisque auctor
        ultricies efficitur. Curabitur tincidunt viverra rutrum. Nunc mattis
        pharetra tortor, eget mattis dolor sodales sed. Vestibulum eget
        sollicitudin est. Aenean non leo lectus. In eget turpis eget ex
        fringilla semper. Mauris maximus vel nisl at iaculis. Duis fringilla
        varius rhoncus. Donec id facilisis orci. Sed ac sollicitudin orci, sit
        amet pharetra libero. Nunc a interdum erat, sed auctor ligula. Quisque
        lobortis lectus sed lacus eleifend, sed commodo lorem vulputate. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Aliquam sit amet diam in est eleifend feugiat vitae eu
        lorem. Vestibulum fermentum odio nibh, sed faucibus metus condimentum
        in. Sed pretium nibh id purus ultricies vulputate. Morbi vel eros
        fringilla, pharetra justo in, consectetur massa. Vestibulum a massa quis
        purus imperdiet fringilla. Vivamus efficitur leo a laoreet bibendum.
        Quisque at sem tempor, consequat leo at, imperdiet sapien. Pellentesque
        ac quam placerat, commodo leo sed, luctus turpis. Aliquam erat volutpat.
        Pellentesque faucibus justo a pulvinar consectetur. Nunc gravida risus
        et sem maximus interdum. Vivamus vitae sapien et augue interdum feugiat.
        neque interdum a. Vestibulum mattis lectus vel est convallis ullamcorper
        sed sit amet sapien. Mauris venenatis, urna vitae suscipit consectetur,
        lectus sem congue leo, quis rutrum nisi turpis quis arcu. Quisque
        commodo erat enim, eu tincidunt magna faucibus vitae. Vivamus malesuada
        scelerisque dui, eu dictum urna. Cras vitae tincidunt arcu, vitae
        aliquet enim. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Pellentesque mauris nulla, cursus eget ex quis, tincidunt
        consequat libero. Phasellus suscipit ipsum sit amet nulla suscipit
        finibus. Pellentesque faucibus id nisi sit amet elementum. Cras placerat
        justo in consectetur blandit. Fusce pharetra facilisis efficitur.
        Vivamus vel urna ac justo tincidunt fringilla a quis magna. Donec
        rhoncus ut magna vel elementum. Nullam egestas pretium urna in ultrices.
        In vel ipsum vel metus pulvinar consequat. Donec dictum eleifend eros,
        et viverra ante cursus ac. Pellentesque bibendum nibh eu tempor tempus.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi purus
        turpis, feugiat et suscipit vitae, gravida faucibus ex. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Nam et interdum leo, ut ullamcorper felis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Duis a consequat velit, eu aliquet mauris. Praesent facilisis mauris sed
        diam pellentesque, nec tristique justo ultrices. Proin accumsan
        dignissim commodo. Donec libero sapien, porta vel posuere ac, euismod
        quis sem. Duis porta risus vitae neque commodo ultricies. Quisque auctor
        ultricies efficitur. Curabitur tincidunt viverra rutrum. Nunc mattis
        pharetra tortor, eget mattis dolor sodales sed. Vestibulum eget
        sollicitudin est. Aenean non leo lectus. In eget turpis eget ex
        fringilla semper. Mauris maximus vel nisl at iaculis. Duis fringilla
        varius rhoncus. Donec id facilisis orci. Sed ac sollicitudin orci, sit
        amet pharetra libero. Nunc a interdum erat, sed auctor ligula. Quisque
        lobortis lectus sed lacus eleifend, sed commodo lorem vulputate. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Aliquam sit amet diam in est eleifend feugiat vitae eu
        lorem. Vestibulum fermentum odio nibh, sed faucibus metus condimentum
        in. Sed pretium nibh id purus ultricies vulputate. Morbi vel eros
        fringilla, pharetra justo in, consectetur massa. Vestibulum a massa quis
        purus imperdiet fringilla. Vivamus efficitur leo a laoreet bibendum.
        Quisque at sem tempor, consequat leo at, imperdiet sapien. Pellentesque
        ac quam placerat, commodo leo sed, luctus turpis. Aliquam erat volutpat.
        Pellentesque faucibus justo a pulvinar consectetur. Nunc gravida risus
        et sem maximus interdum. Vivamus vitae sapien et augue interdum feugiat.
        neque interdum a. Vestibulum mattis lectus vel est convallis ullamcorper
        sed sit amet sapien. Mauris venenatis, urna vitae suscipit consectetur,
        lectus sem congue leo, quis rutrum nisi turpis quis arcu. Quisque
        commodo erat enim, eu tincidunt magna faucibus vitae. Vivamus malesuada
        scelerisque dui, eu dictum urna. Cras vitae tincidunt arcu, vitae
        aliquet enim. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Pellentesque mauris nulla, cursus eget ex quis, tincidunt
        consequat libero. Phasellus suscipit ipsum sit amet nulla suscipit
        finibus. Pellentesque faucibus id nisi sit amet elementum. Cras placerat
        justo in consectetur blandit. Fusce pharetra facilisis efficitur.
        Vivamus vel urna ac justo tincidunt fringilla a quis magna. Donec
        rhoncus ut magna vel elementum. Nullam egestas pretium urna in ultrices.
        In vel ipsum vel metus pulvinar consequat. Donec dictum eleifend eros,
        et viverra ante cursus ac. Pellentesque bibendum nibh eu tempor tempus.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi purus
        turpis, feugiat et suscipit vitae, gravida faucibus ex. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Nam et interdum leo, ut ullamcorper felis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Duis a consequat velit, eu aliquet mauris. Praesent facilisis mauris sed
        diam pellentesque, nec tristique justo ultrices. Proin accumsan
        dignissim commodo. Donec libero sapien, porta vel posuere ac, euismod
        quis sem. Duis porta risus vitae neque commodo ultricies. Quisque auctor
        ultricies efficitur. Curabitur tincidunt viverra rutrum. Nunc mattis
        pharetra tortor, eget mattis dolor sodales sed. Vestibulum eget
        sollicitudin est. Aenean non leo lectus. In eget turpis eget ex
        fringilla semper. Mauris maximus vel nisl at iaculis. Duis fringilla
        varius rhoncus. Donec id facilisis orci. Sed ac sollicitudin orci, sit
        amet pharetra libero. Nunc a interdum erat, sed auctor ligula. Quisque
        lobortis lectus sed lacus eleifend, sed commodo lorem vulputate. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Aliquam sit amet diam in est eleifend feugiat vitae eu
        lorem. Vestibulum fermentum odio nibh, sed faucibus metus condimentum
        in. Sed pretium nibh id purus ultricies vulputate. Morbi vel eros
        fringilla, pharetra justo in, consectetur massa. Vestibulum a massa quis
        purus imperdiet fringilla. Vivamus efficitur leo a laoreet bibendum.
        Quisque at sem tempor, consequat leo at, imperdiet sapien. Pellentesque
        ac quam placerat, commodo leo sed, luctus turpis. Aliquam erat volutpat.
        Pellentesque faucibus justo a pulvinar consectetur. Nunc gravida risus
        et sem maximus interdum. Vivamus vitae sapien et augue interdum feugiat.
      </div>
      <div
        style={{
          width: "100%",
          height: "3.5rem",
          bottom: "0",
          position: "fixed",
          backgroundColor: "darkgrey",
        }}
      ></div>
    </div>
  ) : (
    <>
      <nav
        style={{
          height: "2rem",
        }}
      >
        Navbar
      </nav>
      <div
        className="container"
        style={{
          display: "flex",
          // alignContent: "center",
          // alignItems: "center",
          width: "100%",
        }}
      >
        <div
          id="sidebar"
          style={{
            width: "10%",
            height: "100vh",
            background: "blue",
            position: "fixed",
            left: 0,
            top: 32,
          }}
        >
          hi Duis a consequat velit, eu aliquet mauris. Praesent facilisis
          mauris sed diam pellentesque, nec tristique justo ultrices. Proin
          accumsan dignissim commodo. Donec libero sapien, porta vel posuere ac,
          euismod quis sem. Duis porta risus vitae neque commodo ultricies.
          Quisque auctor ultricies efficitur. Curabitur tincidunt viverra
          rutrum. Nunc mattis pharetra tortor, eget mattis dolor sodales sed.
          Vestibulum eget sollicitudin est. Aenean non leo lectus. In eget
          turpis eget ex fringilla semper. Mauris maximus vel nisl at iaculis.
        </div>
        <div
          id="content1"
          style={{
            width: "50%",
            height: "100%",
            background: "green",
            marginLeft: "10%",
          }}
        >
          hi Duis a consequat velit, eu aliquet mauris. Praesent facilisis
          mauris sed diam pellentesque, nec tristique justo ultrices. Proin
          accumsan dignissim commodo. Donec libero sapien, porta vel posuere ac,
          euismod quis sem. Duis porta risus vitae neque commodo ultricies.
          Quisque auctor ultricies efficitur. Curabitur tincidunt viverra
          rutrum. Nunc mattis pharetra tortor, eget mattis dolor sodales sed.
          Vestibulum eget sollicitudin est. Aenean non leo lectus. In eget
          turpis eget ex fringilla semper. Mauris maximus vel nisl at iaculis.
          Duis fringilla varius rhoncus. Donec id facilisis orci. Sed ac
          sollicitudin orci, sit amet pharetra libero. Nunc a interdum erat, sed
          auctor ligula. Quisque lobortis lectus sed lacus eleifend, sed commodo
          lorem vulputate. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Aliquam sit amet diam in
          est eleifend feugiat vitae eu lorem. Vestibulum fermentum odio nibh,
          sed faucibus metus condimentum in. Sed pretium nibh id purus ultricies
          vulputate. Morbi vel eros fringilla, pharetra justo in, consectetur
          massa. Vestibulum a massa quis purus imperdiet fringilla. Vivamus
          efficitur leo a laoreet bibendum. Quisque at sem tempor, consequat leo
          at, imperdiet sapien. Pellentesque ac quam placerat, commodo leo sed,
          luctus turpis. Aliquam erat volutpat. Pellentesque faucibus justo a
          pulvinar consectetur. Nunc gravida risus et sem maximus interdum.
          Vivamus vitae sapien et augue interdum feugiat. neque interdum a.
          Vestibulum mattis lectus vel est convallis ullamcorper sed sit amet
          sapien. Mauris venenatis, urna vitae suscipit consectetur, lectus sem
          congue leo, quis rutrum nisi turpis quis arcu. Quisque commodo erat
          enim, eu tincidunt magna faucibus vitae. Vivamus malesuada scelerisque
          dui, eu dictum urna. Cras vitae tincidunt arcu, vitae aliquet enim.
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Pellentesque mauris nulla, cursus eget ex quis, tincidunt consequat
          libero. Phasellus suscipit ipsum sit amet nulla suscipit finibus.
          Pellentesque faucibus id nisi sit amet elementum. Cras placerat justo
          in consectetur blandit. Fusce pharetra facilisis efficitur. Vivamus
          vel urna ac justo tincidunt fringilla a quis magna. Donec rhoncus ut
          magna vel elementum. Nullam egestas pretium urna in ultrices. In vel
          ipsum vel metus pulvinar consequat. Donec dictum eleifend eros, et
          viverra ante cursus ac. Pellentesque bibendum nibh eu tempor tempus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi purus
          turpis, feugiat et suscipit vitae, gravida faucibus ex. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nam et interdum leo, ut ullamcorper felis. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Duis a consequat velit, eu aliquet mauris. Praesent
          facilisis mauris sed diam pellentesque, nec tristique justo ultrices.
          Proin accumsan dignissim commodo. Donec libero sapien, porta vel
          posuere ac, euismod quis sem. Duis porta risus vitae neque commodo
          ultricies. Quisque auctor ultricies efficitur. Curabitur tincidunt
          viverra rutrum. Nunc mattis pharetra tortor, eget mattis dolor sodales
          sed. Vestibulum eget sollicitudin est. Aenean non leo lectus. In eget
          turpis eget ex fringilla semper. Mauris maximus vel nisl at iaculis.
          Duis fringilla varius rhoncus. Donec id facilisis orci. Sed ac
          sollicitudin orci, sit amet pharetra libero. Nunc a interdum erat, sed
          auctor ligula. Quisque lobortis lectus sed lacus eleifend, sed commodo
          lorem vulputate. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Aliquam sit amet diam in
          est eleifend feugiat vitae eu lorem. Vestibulum fermentum odio nibh,
          sed faucibus metus condimentum in. Sed pretium nibh id purus ultricies
          vulputate. Morbi vel eros fringilla, pharetra justo in, consectetur
          massa. Vestibulum a massa quis purus imperdiet fringilla. Vivamus
          efficitur leo a laoreet bibendum. Quisque at sem tempor, consequat leo
          at, imperdiet sapien. Pellentesque ac quam placerat, commodo leo sed,
          luctus turpis. Aliquam erat volutpat. Pellentesque faucibus justo a
          pulvinar consectetur. Nunc gravida risus et sem maximus interdum.
          Vivamus vitae sapien et augue interdum feugiat. Duis a consequat
          velit, eu aliquet mauris. Praesent facilisis mauris sed diam
          pellentesque, nec tristique justo ultrices. Proin accumsan dignissim
          commodo. Donec libero sapien, porta vel posuere ac, euismod quis sem.
          Duis porta risus vitae neque commodo ultricies. Quisque auctor
          ultricies efficitur. Curabitur tincidunt viverra rutrum. Nunc mattis
          pharetra tortor, eget mattis dolor sodales sed. Vestibulum eget
          sollicitudin est. Aenean non leo lectus. In eget turpis eget ex
          fringilla semper. Mauris maximus vel nisl at iaculis. Duis fringilla
          varius rhoncus. Donec id facilisis orci. Sed ac sollicitudin orci, sit
          amet pharetra libero. Nunc a interdum erat, sed auctor ligula. Quisque
          lobortis lectus sed lacus eleifend, sed commodo lorem vulputate. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aliquam sit amet diam in est eleifend feugiat vitae eu
          lorem. Vestibulum fermentum odio nibh, sed faucibus metus condimentum
          in. Sed pretium nibh id purus ultricies vulputate. Morbi vel eros
          fringilla, pharetra justo in, consectetur massa. Vestibulum a massa
          quis purus imperdiet fringilla. Vivamus efficitur leo a laoreet
          bibendum. Quisque at sem tempor, consequat leo at, imperdiet sapien.
          Pellentesque ac quam placerat, commodo leo sed, luctus turpis. Aliquam
          erat volutpat. Pellentesque faucibus justo a pulvinar consectetur.
          Nunc gravida risus et sem maximus interdum. Vivamus vitae sapien et
          augue interdum feugiat. neque interdum a. Vestibulum mattis lectus vel
          est convallis ullamcorper sed sit amet sapien. Mauris venenatis, urna
          vitae suscipit consectetur, lectus sem congue leo, quis rutrum nisi
          turpis quis arcu. Quisque commodo erat enim, eu tincidunt magna
          faucibus vitae. Vivamus malesuada scelerisque dui, eu dictum urna.
          Cras vitae tincidunt arcu, vitae aliquet enim. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Pellentesque mauris nulla,
          cursus eget ex quis, tincidunt consequat libero. Phasellus suscipit
          ipsum sit amet nulla suscipit finibus. Pellentesque faucibus id nisi
          sit amet elementum. Cras placerat justo in consectetur blandit. Fusce
          pharetra facilisis efficitur. Vivamus vel urna ac justo tincidunt
          fringilla a quis magna. Donec rhoncus ut magna vel elementum. Nullam
          egestas pretium urna in ultrices. In vel ipsum vel metus pulvinar
          consequat. Donec dictum eleifend eros, et viverra ante cursus ac.
          Pellentesque bibendum nibh eu tempor tempus. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Morbi purus turpis, feugiat et
          suscipit vitae, gravida faucibus ex. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Nam et interdum
          leo, ut ullamcorper felis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Duis a consequat
          velit, eu aliquet mauris. Praesent facilisis mauris sed diam
          pellentesque, nec tristique justo ultrices. Proin accumsan dignissim
          commodo. Donec libero sapien, porta vel posuere ac, euismod quis sem.
          Duis porta risus vitae neque commodo ultricies. Quisque auctor
          ultricies efficitur. Curabitur tincidunt viverra rutrum. Nunc mattis
          pharetra tortor, eget mattis dolor sodales sed. Vestibulum eget
          sollicitudin est. Aenean non leo lectus. In eget turpis eget ex
          fringilla semper. Mauris maximus vel nisl at iaculis. Duis fringilla
          varius rhoncus. Donec id facilisis orci. Sed ac sollicitudin orci, sit
          amet pharetra libero. Nunc a interdum erat, sed auctor ligula. Quisque
          lobortis lectus sed lacus eleifend, sed commodo lorem vulputate. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aliquam sit amet diam in est eleifend feugiat vitae eu
          lorem. Vestibulum fermentum odio nibh, sed faucibus metus condimentum
          in. Sed pretium nibh id purus ultricies vulputate. Morbi vel eros
          fringilla, pharetra justo in, consectetur massa. Vestibulum a massa
          quis purus imperdiet fringilla. Vivamus efficitur leo a laoreet
          bibendum. Quisque at sem tempor, consequat leo at, imperdiet sapien.
          Pellentesque ac quam placerat, commodo leo sed, luctus turpis. Aliquam
          erat volutpat. Pellentesque faucibus justo a pulvinar consectetur.
          Nunc gravida risus et sem maximus interdum. Vivamus vitae sapien et
          augue interdum feugiat.
        </div>
        <div
          id="content2"
          style={{
            width: "40%",
            height: "100vh",
            background: "darkgrey",
          }}
        >
          Content2 Duis a consequat velit, eu aliquet mauris. Praesent facilisis
          mauris sed diam pellentesque, nec tristique justo ultrices. Proin
          accumsan dignissim commodo. Donec libero sapien, porta vel posuere ac,
          euismod quis sem. Duis porta risus vitae neque commodo ultricies.
          Quisque auctor ultricies efficitur. Curabitur tincidunt viverra
          rutrum. Nunc mattis pharetra tortor, eget mattis dolor sodales sed.
          Vestibulum eget sollicitudin est. Aenean non leo lectus. In eget
          turpis eget ex fringilla semper. Mauris maximus vel nisl at iaculis.
          Duis fringilla varius rhoncus. Donec id facilisis orci. Sed ac
          sollicitudin orci, sit amet pharetra libero. Nunc a interdum erat, sed
          auctor ligula. Quisque lobortis lectus sed lacus eleifend, sed commodo
          lorem vulputate. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Aliquam sit amet diam in
          est eleifend feugiat vitae eu lorem. Vestibulum fermentum odio nibh,
          sed faucibus metus condimentum in. Sed pretium nibh id purus ultricies
          vulputate. Morbi vel eros fringilla, pharetra justo in, consectetur
          massa. Vestibulum a massa quis purus imperdiet fringilla. Vivamus
          efficitur leo a laoreet bibendum. Quisque at sem tempor, consequat leo
          at, imperdiet sapien. Pellentesque ac quam placerat, commodo leo sed,
          luctus turpis. Aliquam erat volutpat. Pellentesque faucibus justo a
          pulvinar consectetur. Nunc gravida risus et sem maximus interdum.
          Vivamus vitae sapien et augue interdum feugiat. neque interdum a.
          Vestibulum mattis lectus vel est convallis ullamcorper sed sit amet
          sapien. Mauris venenatis, urna vitae suscipit consectetur, lectus sem
          congue leo, quis rutrum nisi turpis quis arcu. Quisque commodo erat
          enim, eu tincidunt magna faucibus vitae. Vivamus malesuada scelerisque
          dui, eu dictum urna. Cras vitae tincidunt arcu, vitae aliquet enim.
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Pellentesque mauris nulla, cursus eget ex quis, tincidunt consequat
          libero. Phasellus suscipit ipsum sit amet nulla suscipit finibus.
          Pellentesque faucibus id nisi sit amet elementum. Cras placerat justo
          in consectetur blandit. Fusce pharetra facilisis efficitur. Vivamus
          vel urna ac justo tincidunt fringilla a quis magna. Donec rhoncus ut
          magna vel elementum. Nullam egestas pretium urna in ultrices. In vel
          ipsum vel metus pulvinar consequat. Donec dictum eleifend eros, et
          viverra ante cursus ac. Pellentesque bibendum nibh eu tempor tempus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi purus
          turpis, feugiat et suscipit vitae, gravida faucibus ex. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nam et interdum leo, ut ullamcorper felis. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Duis a consequat velit, eu aliquet mauris. Praesent
          facilisis mauris sed diam pellentesque, nec tristique justo ultrices.
          Proin accumsan dignissim commodo. Donec libero sapien, porta vel
          posuere ac, euismod quis sem. Duis porta risus vitae neque commodo
          ultricies. Quisque auctor ultricies efficitur. Curabitur tincidunt
          viverra rutrum. Nunc mattis pharetra tortor, eget mattis dolor sodales
          sed. Vestibulum eget sollicitudin est. Aenean non leo lectus. In eget
          turpis eget ex fringilla semper. Mauris maximus vel nisl at iaculis.
          Duis fringilla varius rhoncus. Donec id facilisis orci. Sed ac
          sollicitudin orci, sit amet pharetra libero. Nunc a interdum erat, sed
          auctor ligula. Quisque lobortis lectus sed lacus eleifend, sed commodo
          lorem vulputate. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Aliquam sit amet diam in
          est eleifend feugiat vitae eu lorem. Vestibulum fermentum odio nibh,
          sed faucibus metus condimentum in. Sed pretium nibh id purus ultricies
          vulputate. Morbi vel eros fringilla, pharetra justo in, consectetur
          massa. Vestibulum a massa quis purus imperdiet fringilla. Vivamus
          efficitur leo a laoreet bibendum. Quisque at sem tempor, consequat leo
          at, imperdiet sapien. Pellentesque ac quam placerat, commodo leo sed,
          luctus turpis. Aliquam erat volutpat. Pellentesque faucibus justo a
          pulvinar consectetur. Nunc gravida risus et sem maximus interdum.
          Vivamus vitae sapien et augue interdum feugiat.
        </div>
      </div>
    </>
  );
}

export default Container;
