   
        function updateValue(selectElement) {
            // Seçim menüsünden seçilen değeri al
            var selectedValue = selectElement.value;
            var clasName=selectElement.id;
            
            // Switch kullanarak seçilen değere göre farklı alanlara yazdır
            switch (clasName) {
                case 'sagOnKapi':
                    document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
                    break;
                // Diğer durumlar için case'leri ekleyebilirsiniz
                // case 'başkaBirAlan':
                //     document.getElementById(targetElementId).innerText = 'Başka Bir Alan Seçilen Değer: ' + selectedValue;
                //     break;
                default:
                    break;
            }
        }
