describe('Home controller', function(){
    beforeEach(module('home'));

    beforeEach(inject(function (_$controller_, _$rootScope_, $q) {
        this.$controller = _$controller_;
        this.$rootScope = _$rootScope_;
        this.$scope = this.$rootScope.$new();

        this.Ctrl = this.$controller('HomeCtrl', {
            $scope: this.$scope
        });
    }));

    it('should provide a controller', function () {
        expect(this.Ctrl).to.not.be.null
    });

    it('has title', function () {
        expect(this.Ctrl.title).to.equal('Welcome home!')
    });
});